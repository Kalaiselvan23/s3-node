import config from "../config"
import AWS from "aws-sdk"
//upload files
export const uploadtoS3=async(file:any, bucketName:string)=>{
    try{
        const s3=new AWS.S3({
            credentials:{
                accessKeyId:config.aws.accessKeyId!,
                secretAccessKey:config.aws.secretAccessKey!,
            },
            region:config.aws.region!
        });
        //to create new file name
        const newFileName=`pic_${(Date.now()).toString()}.${file.mimetype.split("/")[1]}`
        const params={
            Bucket:bucketName,
            Key:newFileName,
            Body:file.data,
        }
        s3.upload(params,{},(err,data)=>{
            if(err) throw err;
            console.log(`File uploaded successfully at ${data.Location}`)
            return data
        })
    }
    catch(err)
    {
        console.log(err)
    }
}