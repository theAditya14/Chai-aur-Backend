import Subscription from "../models/subsription.model.js";
import ApiError from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import User from "../models/user.model.js";
import { subscribe } from "diagnostics_channel";

// subscribe and unsubscribe to a channel

const toggleSubscription = asyncHandler(async (req, res) => {
  // 1: get channel detail like username or other,
  // 2: get user id from req.user.id and channel id from req.params.channelId
  // 3: check if user is already subscribed to the channel or not
  // 4: if subscribed then unsubscribe and if not then subscribe
  // 5: return the response with the updated subscription status

  const { channelId } = req.params;
  console.log(channelId);
  const userId = req.verifyToken.id;
  console.log(userId);

  if (userId.toString() === channelId) {
    throw new ApiError(404, "invalid subscribe you can't subscribe to youself");
  }

  const existingSubscriber = await Subscription.findOne({
    subscriber: userId,
    channel: channelId,
  });

  if (existingSubscriber) {
    await Subscription.findByIdAndDelete(existingSubscriber._id);

    return res
      .status(200)
      .json(new ApiResponse(200, null, "Channel unsubscribed successfully"));
  }

  await Subscription.create({
    subscriber: userId,
    channel: channelId,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Channel subscribed successfully"));
});

// get all subscribers of a channel;

const getAllSubscribers = asyncHandler(async (req, res) => {
  // step 1:  Get channel ID
  // step 2: Check channelId
  // step 3: Check channel/user exists ?
  // step 4:  Find all subscribers
  // 5. Send response

  const { channelId } = req.params;

  if (!channelId) {
    throw new ApiError(404, "Channelid is required");
  }

  const channel = await User.findById(channelId);

  if (!channel) {
    throw new ApiError(405, "channel is not found");
  }

  // find all subscribers
  const subscribers = await Subscription.find({
    channel: channelId,
  }).populate("subscriber", "username fullName avatar")

  console.log("subscribers: ",subscribers)

  // 5. Send response
  return res
    .status(200)
    .json(
      new ApiResponse(200, subscribers, "All subscribers fetched successfully"),
    );
});


// controller to return channel list to which user has subscribed
const getSubscribedChannels = asyncHandler(async (req, res) => {
  // 1 : get user Id who logged in 
  // 2 : check user id 
  // 3 : channel or user exist ?
  // 4 :
  const { subscriberId } = req.params;

});

export { toggleSubscription, getAllSubscribers };
