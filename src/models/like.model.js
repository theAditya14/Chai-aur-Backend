import mongoose,{Schema, Types} from "mongoose";
import { Video } from "./video.model.js";


const likeSchema = new Schema(
   
  {
      video :{
         type : Schema.Types.ObjectId,
         ref : "Video"
      },

    comments :{
        type :Schema.Types.ObjectId,
        ref : "comments"
    },
    
    likeBy : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }

  },
  {
    timestamps : true
  }



)


const like = mongoose.model("like", likeSchema);

export {like}