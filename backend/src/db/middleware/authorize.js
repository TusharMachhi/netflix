const roleAuth = (...role)=>{
   return (req,res,next)=>{
       
       console.log("userrole",req.user.role)
       if(!role.includes(req.user.role)){
          return res.status(400).json("you are unauthorized")
       }
       next()
   }
}
export default roleAuth