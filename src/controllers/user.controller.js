// controller folder k matlb ye h ki jab koi request URL me aye to us ko handler kaise karna ya fir kya response bejna ya jo bhi logics  vo sab ye karta h
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import User from "../models/user.model.js";
import ApiResponse from "../utils/apiResponse.js";
import uploadOnCloudinary from "../utils/cloudnary.js";

//5. access and refresh token check or send (logged in wala part);

const generateAccess_or_Refresh_Token = async (user_id) => {
  try {
    const user = await User.findById(user_id);

    const refreshToken = generateRefreshToke();
    const accessToken = generateAccessToke();

    user.refreshToken = await refreshToken;
    user.save({ validateBeforeSave: false });

    return { refreshToken, accessToken };
  } catch (error) {
    throw new ApiError(
      500,
      "SOMTHING WORNG WHILE GENERATE ACCESS OR REFRESH TOKEN",
    );
  }
};


//create/Register User :- 

const registerUser = asyncHandler(async (req, res) => {
  //get user details from frontend .
  const { fullName, email, username, password } = req.body;

  //validation - not empty
  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // check if user already exists: username,email
  const user = await User.findOne({ $or: [{ email }, { username }] });

  if (user) {
    throw new ApiError(409, "User already exists");
  }

  // check for images, check for avatar
  const avatarFile = req.files?.avatar?.[0]?.path;
  const coverImageFile = req.files?.coverImage?.[0]?.path;

  if (!avatarFile) {
    throw new ApiError(400, "Avatar is required");
  }

  const avatar = await uploadOnCloudinary(avatarFile);
  const coverImage = coverImageFile
    ? await uploadOnCloudinary(coverImageFile)
    : null;

  if (!avatar) {
    throw new ApiError(
      500,
      "Avatar upload failed. Check Cloudinary credentials and file upload path.",
    );
  }

  //create user object - create entry in db
  const userCreated = await User.create({
    email,
    password,
    fullName,
    username: username.toLowerCase(),
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
  });
  await userCreated.save();

  // remove password and refresh token field from response
  const resUserData = await User.findById(userCreated._id).select(
    "-password -refreshToken",
  );

  // check for user creation
  if (!resUserData) {
    throw new ApiError(500, "Something went wrong while creating user");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, resUserData, "User created successfully"));
});



//Login User
const LoggedInUser = asyncHandler(async (req, res) => {
  //1. we need to get users passsword ,email,username
  //2. check the email or username is given by user or not
  //3.find the user .  yes/not
  //4. check passowrd is correct or not .
  //5. access and refresh token check or send   (some code ,top of the code)
  //6. res cookies.

  ////*********** */ */

  //1. we need to get users passsword ,email,username

  const { username, email, password } = req.body;

  //2. check the email or username is given by user or not

  if (!username || !email) {
    throw new ApiError(500, "username or email is required!");
  }

  //3.find the user

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });
  console.log(user);

  if (!user) {
    throw new ApiError(400, "User is not avelaible");
  }

  //4 check the password of user is correct or not.

  const isPasswordValide = await user.isPasswordCorrect(password);

  if (!isPasswordValide) {
    throw new ApiError(401, "invalid password");
  }

  //5. access and refresh token check or send
  const { accessToken, refreshToken } = await generateAccess_or_Refresh_Token(
    user._id,
  );

  const LoggIn_User = await User.findById(user._id).select(
    " -password -refreshToken",
  );

  console.log("LoggIn_User : ", LoggIn_User);

  const option = { httpOnly : true, secure : true}  // ise hoga ye ki jo cookies / refresh token h vo user change nhi karsata in browser pe . ye sirf sever se hi chang hogi 

  return  res.status(200)
  .cookie("accessToken" , accessToken , option)
  .cookie("refreshToken", refreshToken, option)
  .json(
      new ApiError(
      200,
      { 
        user : LoggIn_User , accessToken, refreshToken  // hum log idher q bej rhe h access or refresh token jab humne cookies me bej diya h to . hum isliye bej rhe h ki koi user apne browser me mannualy save karna chata h ya fir ko ye application , mobile app me run karna chata h .to uske liye cookie ke saat response bej diya 
      } ,
      "User Loggind In Successfully."
    )
  )

  console.log( "check for cookies in response",res)
});


// Loggoute User;

const LoggouUser = asyncHandler((req,res) =>{
  User.findByIdAndUpdate(
    req.verifyToken._id,
    {
      $set: {
          refreshToken : undefined
      }
    }, 
    {
      new : true
    }
  )

   const option = { httpOnly : true, secure : true} 

   return res
   .status(200)
   .clearCookie("accessToken", option)
   .clearCookie("refreshToken", option)
   .json(new ApiResponse(200, {}, "User Logged Out Successfully"))
})



export { registerUser, LoggedInUser,LoggoutUser };
