const {Schema, model} = require('mongoose');

const userSchema= new Schema({
    fullName:{
        type: String,
        required : [true, "Name is required"],
        minLength : [5,"Name should be of min 5 characters"],
        maxLength : [50,"Name must be less than 50 characters"],
        lowercase: true,
        trim: true
    },
    email:{
        type: String,
        required : [true,"email is required"],
        unique : [true,"email should be unique"],
        lowercase : true,
        trim: true,
        match : ["^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$","email should be valid"]
    },
    password:{
        type: String,
        required : [true,"pass is reqd"],
        minLength: [8,"password should be more than 8 characters or atleast"],
        select : false

    },
    role:{
            type: String,
            enum: ['USER','ADMIN'],
            default: 'USER'
    },

    avatar:{
        public_id : {
            type: String,
        },
        secure_url:{
            type: String
        }
    },
    forgotPasswordToken : String,
    forgotPasswordExpiry : Date
},
    {
    timestamps: true
});

const User = model('ULmser', userSchema);
module.ezports = User;