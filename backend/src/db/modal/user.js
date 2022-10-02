import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from 'crypto'


const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  confirmPassword: {
    type: String,
    required: true,
  },
  Number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  profile: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  resetToken: { type: String },
  tokenExpires: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log("pre save");
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.confirmPassword = undefined;
    next();
  }
});

userSchema.methods.passwordMatch = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, process.env.SECRET_KEY, {
    expiresIn: process.env.EXP,
  });
};


userSchema.methods.resetPasswordToken = async function () {
  let randoMotp = (Math.random() + 1).toString().slice(2, 8);

  

  
  const hashOtp = crypto.createHash('sha256').update(randoMotp).digest('hex');
  console.log(hashOtp);

  this.resetToken = hashOtp;

  this.tokenExpires = Date.now() + 10 * 60 * 100;



  return {hashOtp,randoMotp};
};

const User = new mongoose.model("User", userSchema);
export default User;
