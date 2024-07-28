import express, { Router } from "express"
import { uploadProfileImg } from "../controllers/imageController";
const routes:Router=express.Router();

routes.get("/ping",(req:any,res:any)=>{
    console.log("OK!!");
    res.status(200).json({
        message:"OK!!"
    })
})
routes.post("/upload-profile-pic",uploadProfileImg)

routes.use((req:any,res:any,next)=>{
    const error=new Error("not found");
    console.log(error);
    return res.status(404).json({msg:error.message})
})
export default routes