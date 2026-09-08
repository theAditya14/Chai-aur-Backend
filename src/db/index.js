import mongoose  from "mongoose";
import {DB_NAME} from '../constants.js';

const connectDB = async () =>{
    try {
        const connectionInstace = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB HOST: ${connectionInstace.connection.host}` );
        
        // console.log(process.platform);
        
    } catch (error) {
        console.error('MONGODB connection FAILD ', error)
        process.exit(1)
    }
}
export default connectDB