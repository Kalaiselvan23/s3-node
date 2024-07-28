import express from 'express';

import fileUpload from 'express-fileupload';
import routes from './routes';
import config from './config';

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(fileUpload())

app.use("/api/v1/",routes)

app.listen(8000,()=>{
    console.log("Server listening on 8000")
    console.log(config)
})