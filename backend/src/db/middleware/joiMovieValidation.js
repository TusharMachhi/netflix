import Joi from 'joi'
const moviesSchema = Joi.object({
    movieName :Joi.string().trim().lowercase().max(40).pattern(/^\S+(?: \S+)*$/).required().messages({
        "string.base":"it should be string",
        "string.empty":"please input value",
        "string.max" :"maximum 30 character allow",
        "string.pattern.base":"only one space required",
        "string.required":"please enter the value"
    }),
    videos:Joi.string(),
    isMovies:Joi.string().required(),
    description: Joi.string().required(),
    coverPoster: Joi.string(),
    genres:Joi.string().required(),
    duration:Joi.string(),
    ageLimit:Joi.number().required(),
    year:Joi.number().integer().min(1900).max(3000).required().messages({
        "number.base":"only number required",
        "number.max":"maximum 3000 year allow",
        "number.min":"minimim 1900 movies allow",
        "number.required":"year required"
    })

})

export {moviesSchema}


