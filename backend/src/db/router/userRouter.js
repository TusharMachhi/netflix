import express from "express";
const router = express.Router();
import {userSchema,loginSchema,userNameSchema,otpSchema} from '../middleware/joiVlidation.js';
import {createUser,logIn,logout,forgotPassword,resetPassword} from '../controller/userController.js'
import validate from '../middleware/Joi.js'
import auth from '../middleware/auth.js'


//user route

router.route("/register").post(validate(userSchema),createUser )
router.route("/login").post(validate(loginSchema),logIn)
router.route("/logout").get(auth,logout)
router.route("/forgotpassword").get(validate(userNameSchema),forgotPassword )
router.route("/reset").get(validate(otpSchema),resetPassword)



export default router;
