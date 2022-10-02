import Joi from "joi";
const userSchema = Joi.object({
  userName: Joi.string().min(3).max(30).required(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref("password"),
  profile:Joi.string(),
  email:Joi.string().email().required(),
  role:Joi.string(),
  Number: Joi.number().required(),
});

const loginSchema = Joi.object({
  userName: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
})

const userNameSchema = Joi.object({

 userName: Joi.string().min(3).max(30).required(),
})

const otpSchema = Joi.object({
  resetToken:Joi.string().min(6).max(6),
  password: Joi.string().required(),
  confirmPassword: Joi.ref("password"),
})



export {userSchema,loginSchema,userNameSchema,otpSchema};
