// controller folder k matlb ye h ki jab koi request URL me aye to us ko handler kaise karna ya fir kya response bejna ya jo bhi logics  vo sab ye karta h 


import {asyncHandler} from '../utils/asyncHandler.js';

const registerUser = asyncHandler(  (req,res)=>{
      res.status(200).json({
        message: "OK Your request is reached"
    })
})


export default registerUser