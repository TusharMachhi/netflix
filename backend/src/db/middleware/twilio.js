const accountSid = "AC73a48febc578c3a9e15ce19446532657";
const authToken = "a3c914bd4c18562aacf284d0170ed2d5";

import twilio from "twilio";


const sendMessage = async (options, res) => {
 
  const client =   twilio(accountSid, authToken);
  const response =await client.messages.create(options)
  if(!response){
     res.status(400).json({error:"message not sent"})
  }else{
    res.status(200).json({msg:"message  sent"})
    
  }
   

};

export default sendMessage;
