import mongoose  from "mongoose";
import {DB_NAME} from '../constants.js';

const connectDB = async () =>{
    try {
        const connectionInstace = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB HOST: ${connectionInstace.connection.host}` );
        
        // console.log(process.platform);
        
    } catch (error) {
        console.error('MONGODB connection FAILD ', error)
        
        // it is just a method of express and it is say that end the process which is running at the same time with exit code in node
        process.exit(1)
    }
}
export default connectDB