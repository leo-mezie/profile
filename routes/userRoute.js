const express = require('express');
const {
    createProfile,
   getSingleProfile
} = require('../controllers/userControllers');

const router = express.Router();


// router.route("/").get(getAllUser);

router.route("/").post(createProfile);

router.route("/:id").get(getSingleProfile);

module.exports = router;