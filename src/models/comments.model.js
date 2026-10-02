import mongoose,{Schema} from "mongoose";


const commentSchema = new Schema(
    {
        content :{
            type : String,
            require : true
        },

        video : {

            ref : "Video"
        },

         owner : {
                ref : "User"
         }
        
    }
)


const comments = mongoose.model("comments",commentSchema);
export {comments}