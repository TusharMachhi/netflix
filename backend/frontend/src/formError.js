export const validate = (values)=>{
    console.log("validate values",values)
    let error = {}

    if(!values.email.trim()){
        error.email = "enter email"

    }
    
    if(!values.Pnumber.trim()){
        error.Pnumber = "enter Phone number"
    }
    if(!values.userPic){

        error.userpic="select user profile"
    }
    if(!values.password.trim()){
        error.password = "enter password"

    }
    if(!values.cpassword.trim()){
        error.cpassword = "enter cpassword"
    }
    else if(values.password.trim() !== values.cpassword.trim()){
        error.cpassword = "password not match"

    }

    return error
}
