import dotenv from "dotenv"

dotenv.config();
const config={
    aws:{
        bucket:process.env.AWS_BUCKET,
        region:process.env.AWS_REGION,
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
    }
}
export default config