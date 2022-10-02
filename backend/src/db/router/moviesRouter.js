import express from 'express'
const router  = express.Router()
import validate from '../middleware/Joi.js'
import{cerateMovies,deleteMovies,updateMovies,getAllMovies,getMovieById,getRandom} from '../controller/moviesController.js'
import{moviesSchema} from '../middleware/joiMovieValidation.js'
import roleAuth from '../middleware/authorize.js'
import auth from '../middleware/auth.js'
import {advancePagination} from '../middleware/advancePagination.js'
import Movies from "../modal/movie.js";




router.route("/createmovies/").post(auth,roleAuth("admin"),validate(moviesSchema),cerateMovies)  
router.route("/delete/:id").delete(auth,roleAuth("admin"),deleteMovies)
router.route("/update/:id").put(auth,roleAuth("admin"),updateMovies)
router.route("/").get(advancePagination(Movies),getAllMovies)
router.route("/byid/:id").get(getMovieById)

router.route("/random").get(getRandom)

export default router