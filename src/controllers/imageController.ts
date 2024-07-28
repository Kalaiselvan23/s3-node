import config from "../config"
import { uploadtoS3 } from "../utils/functions"

export const uploadProfileImg=async(req:any,res:any)=>{
    try{
        //logic to upload file
        console.log(req.files)
        if(req.files.profilePic.name){
            //upload file
            console.log(config.aws.bucket)
            const result=await uploadtoS3(req.files.profilePic,config.aws.bucket!)
            return res.status(201).json({
                message:"Sucess",
                body:result,
            })
        }
    }
    catch(err)
    {
        console.log(err)
        return res.status(500).json({
            message:"something went wrong"
        })
    }
}