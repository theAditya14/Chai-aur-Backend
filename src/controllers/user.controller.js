// controller folder k matlb ye h ki jab koi request URL me aye to us ko handler kaise karna ya fir kya response bejna ya jo bhi logics  vo sab ye karta h 
import { asyncHandler } from '../utils/asyncHandler.js';
import ApiError from '../utils/apiError.js';
import User from '../models/user.model.js';
import ApiResponse from '../utils/apiResponse.js';
// import uploadOnCloudinary from '../utils/cloudnary.js';

const registerUser = async (req, res) => {
  const {fullName, email, username, password } = req.body;
 
    
  
  

  if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const user = await User.findOne({ $or: [{ email }, { username }] });

  if (user) {
    throw new ApiError(409, "User already exists");
  }

  // const avatarFile = req.files?.avatar?.[0]?.path;
  // const coverImageFile = req.files?.coverImage?.[0]?.path;

  // if (!avatarFile) {
  //   throw new ApiError(400, "Avatar is required");
  // }

  // const avatar = await uploadOnCloudinary(avatarFile);
  // const coverImage = coverImageFile ? await uploadOnCloudinary(coverImageFile) : null;

  // if (!avatar) {
  //   throw new ApiError(500, "Avatar upload failed. Check Cloudinary credentials and file upload path.");
  // }

  const userCreated = await User.create({
    email,
    password,
    fullName,      
    username: username.toLowerCase(),
    // avatar: avatar.url,
    // coverImage: coverImage?.url || "",
  });
  await userCreated.save(); 

  const resUserData = await User.findById(userCreated._id).select("-password -refreshToken");

  if (!resUserData) {
    throw new ApiError(500, "Something went wrong while creating user");
  }

  return res.status(200).json(new ApiResponse(200, resUserData, "User created successfully"));

};

export default registerUser;