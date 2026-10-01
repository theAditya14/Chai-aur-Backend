import { Video } from "../models/video.model.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import uploadOnCloudinary from "../utils/cloudnary.js";
import verifyJWT from "../middlewares/auth.middlewares.js";
import User from "../models/user.model.js";
import mongoose from "mongoose";

const UploadVideos = asyncHandler(async (req, res) => {
  //  1: get data from user

  const { title, description } = req.body;
  const userId = req.verifyToken?.id;

  if (!userId) {
    throw new ApiError(400, "unauthorized user");
  }

  if (!title) {
    throw new ApiError(400, "Video title required");
  }

  // 2 : check for video
  const localvideoFile = req.files.videoFile?.[0]?.path;
  const localthumbnail = req.files.thumbnail?.[0]?.path;

  console.log("local File path : ", localvideoFile);

  console.log("local File path : ", localthumbnail);

  if (!localvideoFile) {
    throw new ApiError(404, "video is required");
  }
  if (!localthumbnail) {
    throw new ApiError(404, "video thumbnail is required");
  }

  const video = await uploadOnCloudinary(localvideoFile);
  const thumbnail = await uploadOnCloudinary(localthumbnail);

  if (!video) {
    throw new ApiError(404, "Video file upload failed! ");
  }

  if (!thumbnail) {
    throw new ApiError(404, " thumbnail file upload failed! ");
  }

  const videoCreate = await Video.create({
    owner: userId,
    title,
    description,
    videoFile: video.url,
    thumbnail: thumbnail.url,
  });

  console.log("Video Upload : ", videoCreate);

  return res
    .status(200)
    .json(new ApiResponse(200, videoCreate, "Video upload successfully"));
});

// get video
const getVideo = asyncHandler(async (req, res) => {
  // const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query

  const { videoId } = req.params;

  if (!videoId) {
    throw new ApiError(400, "video id is required");
  }

  const video = await Video.findById(videoId).populate(
    "owner",
    "username avatar fullName  ",
  );

  console.log(video);

  return res
    .status(200)
    .json(new ApiResponse(200, video, "Video fetch successfully! "));
});

// get all Videos
const getAllVideos = asyncHandler(async (req, res) => {

    // 1. Get userId
    const { userId } = req.params;

    if (!userId) {
        throw new ApiError(400, "User id is required");
    }

    // 2. Find all videos uploaded by this user
    const allVideos = await Video.aggregate([
        {
            $match: {
                owner: new mongoose.Types.ObjectId(userId)
            }
        }
    ]);

    // 3. Check if videos found
    if (!allVideos || allVideos.length === 0) {
        throw new ApiError(404, "No videos found for this user");
    }

    // 4. Send response
    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                allVideos,
                "Videos fetched successfully!"
            )
        );
});

export { UploadVideos, getVideo, getAllVideos };
