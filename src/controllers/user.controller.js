// controller folder k matlb ye h ki jab koi request URL me aye to us ko handler kaise karna ya fir kya response bejna ya jo bhi logics  vo sab ye karta h 
import {asyncHandler} from '../utils/asyncHandler.js';
import ApiError from '../utils/apiError.js';
import User from '../models/user.model.js';
import ApiResponse from '../utils/apiResponse.js'
import uploadOnCloudinary from '../utils/cloudnary.js'

const registerUser = asyncHandler( async (req,res)=>{
    
    //get user details from frontend .
    const {fullName , email,username,password} = req.body;
    
    //validation - not empty
    if([fullName,email,username,password].some( (field)=> field?.trim() === "" )){
        throw new ApiError(400, " all fileds are required")
    }
    
    // check if user already exists: username,email
    const user  = await  User.findOne( { email : email,  username:username } )
    if(user){
        throw new ApiError(402, "User is already exist!");
    }
    
    // check for images, check for avatar
    
        
         const avatarFile = req.files?.avatar?.[0];
         const coverImageFile = req.files?.coverImage?.[0];

        
    if (!avatarFile?.path) {
      throw new ApiError(400, "Avatar is required");
    }

    const avatar = await uploadOnCloudinary(avatarFile.path);
    const coverImage = coverImageFile
      ? await uploadOnCloudinary(coverImageFile.path)
      : null;

    if (!avatar?.url) {
      throw new ApiError(500, "Avatar upload failed");
    }

    //create user object - create entry in db
    const usercreated = await  User.create({
        email,
        password,
        fullName,
        username : username.toLowerCase(),
        avatar:  avatar.url,        
        coverImage: coverImage?.url || ""
    })
    
    // remove password and refresh token field from response
    
    const resUserData =  await usercreated.findById(usercreated._id).select(
        "-password  -refeshToken"
    )


    // check for user creation 
    if(!resUserData){
        throw new ApiError(500, "Something went wrong")
     }



     // return res

  return  ApiResponse(200,resUserData,"user complete")





})




export default registerUser