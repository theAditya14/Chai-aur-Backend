import  dotenv from 'dotenv'
import connectDB from "./db/index.js";
import app from './app.js';


dotenv.config({path:'./.env'})


connectDB()

// jab me humara db connect hota h tab async or await complete hota to ek promise return hota h to fir hum then or catch use karte 

.then(() => {

 app.listen(process.env.PORT || 8000, () => {
         console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
     })
    
     app.on('error', (error) =>{
        
        console.log('ERRR', error);
        throw error

     })

})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})