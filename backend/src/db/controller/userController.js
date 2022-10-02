import User from "../modal/user.js";
import sendMessage from "../middleware/twilio.js";
import crypto from "crypto";
import { upload } from "../middleware/cloudinary.js";

const createUser = async (req, res, next) => {
  try {
    const { userName,password,confirmPassword,Number,email } = req.body;
    console.log(req.body)

    const user = await User.findOne({
      userName,
    });
    if (!user) {
      console.log(req.files)
      const { profile } = req.files;
     
      
      const imageUpload = await upload(profile.tempFilePath)
      
      
      const register = new User({
        userName,
        password,
        confirmPassword,
        profile:imageUpload.url,
        Number,
        email,

      });

      const data = await register.save();
      res.status(201).json({
        data: data
      });
    } else {
      res.status(400).json({
        error: "user already exist",
      });
    }
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const logIn = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({
      userName,
    });
    if (!user) {
      res.status(401).json({
        error: "invalid credentials",
      });
    } else {
      const isMatch = await user.passwordMatch(password);
      if (!isMatch) {
        res.status(401).json({
          error: "invalid credentials",
        });
      } else {
        const token = user.generateToken();
        const option = {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };
        res.status(200).cookie("token", token, option).json({
          success: "true",
          token,
          user:user.role,
          userName:user.userName,
          profile:user.profile
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      success: "false",
      error: error.message,
    });
  }
};

const logout = async (req, res, next) => {
  if (!req.user) {
    return res.status(403).json({
      error: "you are unauthorized",
    });
  }
  
  const option = {
    expires: new Date(Date.now()),
    httpOnly: true,
  };

  res.status(200).cookie("token", null, option).json({
    data: "logout succesfully",
  });
};

const forgotPassword = async (req, res, next) => {
  try {
    const { userName } = req.body;

    const user = await User.findOne({
      userName,
    });

    if (!user) {
      res.status(400).json({ status: "fail", erorr: "invalid userName" });
    }

    let { randoMotp, hashOtp } = await user.resetPasswordToken();
    console.log(user.Number, hashOtp);
    const options = {
      body: `Your OTP is ${randoMotp} expires in 10 Min`,
      from: "+19206969056",
      to: `+91${user.Number}`,
    };
    await sendMessage(options, res);

    await user.save({
      validateBeforeSave: false,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const resetPassword = async (req, res, next) => {
  try {
    console.log(req.url);
    console.log(req.files);
    console.log(req.file);
    const { resetToken, password, confirmPassword } = req.body;

    console.log(resetToken, password, confirmPassword);

    const token = crypto.createHash("sha256").update(resetToken).digest("hex");

    const user = await User.findOne({
      resetToken: token,
      tokenExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({ data: "Otp expires try again" });
    }

    user.password = password;
    user.confirmPassword = confirmPassword;
    user.tokenExpires = undefined;
    user.resetToken = undefined;

    await user.save();
    return res.status(201).json({ data: "user password update successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};








export {
  createUser,
  logIn,
  logout,
  forgotPassword,
  resetPassword,
  
};
