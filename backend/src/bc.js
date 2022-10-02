import joi from 'joi'
const userSchema = joi.object({
  // name:joi.string().trim().lowercase().max(30).pattern(/^\S+(?: \S+)*$/).required().messages({
  //   "string.base":"it should be string",
  //   "string.empty":"please input value",
  //   "string.max":"maximum 250 character required",
  //   "string.pattern.base":"only one space required",
  //   "string.required":"please enter the value"

  // }),
  number:joi.number().integer().min(1900).max(3000).messages({
    "number.base":"only number required",
    "number.max":"maximum 3000 year allow",
    "number.min":"minimim 1900 movies allow",
    "number.required":"year required"
})
  
})

const name={number:1904}



const val =userSchema.validate(name)

 console.log("error","value",val.value,val.error)