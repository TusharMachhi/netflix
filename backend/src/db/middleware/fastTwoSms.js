import fast2sms from "fast-two-sms";

//20RmAWYLqTM9wZvzaFpyGIruhlgDPnQ7C8kJxVoKNt1eOjfH3Uvj4PVXgsUe5zhkQbEKfWa2otrH8FcS
const sendOtp  = async(option,res)=>{
console.log(option)
 
fast2sms.sendMessage(option).then((response)=>{
    console.log(response)
    res.send("sms send")
}).catch((err)=>{
    res.send("sms not send")
})
    


48484848
}
//var options = {authorization : "20RmAWYLqTM9wZvzaFpyGIruhlgDPnQ7C8kJxVoKNt1eOjfH3Uvj4PVXgsUe5zhkQbEKfWa2otrH8FcS" , message : 'YOUR_MESSAGE_HERE' ,  numbers : ['7020239836']} 
export default sendOtp
//var options = {authorization : "20RmAWYLqTM9wZvzaFpyGIruhlgDPnQ7C8kJxVoKNt1eOjfH3Uvj4PVXgsUe5zhkQbEKfWa2otrH8FcS" , message : 'YOUR_MESSAGE_HERE' ,  numbers : ['7020239836']} var options = {authorization : "20RmAWYLqTM9wZvzaFpyGIruhlgDPnQ7C8kJxVoKNt1eOjfH3Uvj4PVXgsUe5zhkQbEKfWa2otrH8FcS" , message : 'YOUR_MESSAGE_HERE' ,  numbers : ['7020239836']} 