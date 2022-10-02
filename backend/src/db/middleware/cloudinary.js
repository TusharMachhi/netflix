import cloudinary from "cloudinary";
import 'dotenv/config'

cloudinary.config({
  cloud_name: "dv41n5thm",
  api_key: "141433761798371",
  api_secret: "_ZA2G8WiDvdeWSWtzTVpcu8eV4E",
  secure: true,
});
console.log(process.env.CLOUDINARY_NAME)


const upload = async (file) => {
  try {

    const image = await cloudinary.v2.uploader.upload(
      file,

      { resource_type:"auto",
      folder: "user" },
      (result) => result
    );
    return image
   
  
    
  }catch(error) {
    console.log(error)
    
  }
}

const uploadvid = async (file) => {
  try {

    const image = await cloudinary.v2.uploader.uploadvid(
      file,
      { folder: "user" },
      (result) => result
    );
    return image
   
  
    
  }catch(error) {
    console.log(error)
    
  }
}
 

export { upload };
