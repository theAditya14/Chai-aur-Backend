import { Subscription } from "../models/subsription.model";
import ApiError from "../utils/apiError";
import { asyncHandler } from "../utils/asyncHandler";



const toggleSubscription = asyncHandler(async(req,res) =>{
    // 1: get channel detail like username or other,
    // 2: get user id from req.user.id and channel id from req.params.channelId
    // 3: check if user is already subscribed to the channel or not
    // 4: if subscribed then unsubscribe and if not then subscribe
    // 5: return the response with the updated subscription status

    const { channelId } = req.params;
    const userId = req.user.id

  
    if(userId.toString() === channelId){
       throw new ApiError(404, "invalid subscribe you can't subscribe to youself")
    } 


    const existingSubscriber = await Subscription.findOne({
        subscriber : userId,
        channel : channelId
    })

    if(existingSubscriber){
       await Subscription.findByIdAndDelete(existingSubscriber._id);

    return res.status(200).json(
      new ApiResponse(
        200,
        null,
        "Channel unsubscribed successfully"
      )
    );
    }



  await Subscription.create({
        subscriber : userId,
        channel : channelId
    })


     return res.status(200).json(
    new ApiResponse(
      200,
      null,
      "Channel subscribed successfully"
    )
  );
    


})



export {
  toggleSubscription
}