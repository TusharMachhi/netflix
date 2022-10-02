import jwt from "jsonwebtoken";
import User from "../modal/user.js";
const auth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).json({ error: "you are not authorize" });
    }
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      const option = {
        expires: new Date(Date.now()),
        httpOnly: true,
      };

      return res.status(200).cookie("token", null, option).json({
        data: "jwt expire",
      });
    }
    const id = await User.findById(decode.id);

    req.user = id;
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export default auth;
