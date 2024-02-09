const asyncHandler = require('express-async-handler')
const profile = require('../model/users')

// create user profile
// @post req
const createProfile = asyncHandler(async(req, res) => {
    

    // destructure the body
    const { fullName, email, track, phone, github } = req.body;

    // check for empty fields
    if (!fullName || !email || !track || !phone || !github) {
        res.status(400);
         throw new Error("All Fields Are Required")
    }
 
      // if fields are not empty then create new contact 
    const userProfile = await profile.create({
        fullName,
        email,
        track,
        phone,
        github
    })

    if(userProfile) {
        res.json({ status: "200", message: "successful api call" })
       
    }
 
    console.log("user profile:", req.body);

})

// get created users
// @get req
const getSingleProfile = asyncHandler(async (req, res) => {
    // search for user profile using id 
    const userProfile = await profile.findById(req.params.id);

    if (!userProfile) {
        res.status(404);
        throw new Error(" No User Exists")
    }
    // else display single user profile
    res.status(200).json(userProfile)
  
})


module.exports = {
    createProfile,
    getSingleProfile,
}