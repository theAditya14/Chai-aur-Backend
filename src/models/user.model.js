import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            // trim: true, 
            // index: true
        },
         password: {
            type: String,
            required: [true, 'Password is required']
        },
        // avatar: {
        //     type: String, // cloudinary url
        
        // },
        // coverImage: {
        //     type: String, // cloudinary url
        // },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
       
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
)

//it is encrypte password before save in db .
userSchema.pre("save", async function (next) {  // idher ek baad dyan rakni h ki auger async use kar rhe h to next() ka use nhi karna h .
    
    if (!this.isModified("password")) return  // this line is check ki sirf password hi change houa h ya sab kuch .

    this.password = await bcrypt.hash(this.password, 10);

});

// Costum method in mongoose
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToke = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToke = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};


const User = mongoose.model("User", userSchema)

export default User