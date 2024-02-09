const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({

    fullName: {
        type: String,
        required:[true, " fullname is required"],
    },

    
    email: {
        type: String,
        required:[true, " email is required"],
    },

    
   track: {
        type: String,
        required:[true, " track is required"],
    },
   

    phone: {
        type: String,
        required:[true, " fullname is required"],
    },

    
    github: {
        type: String,
        required:[true, " fullname is required"],
    },

},
{
    timestamps : true,
    })

    module.exports = mongoose.model("profile", profileSchema)