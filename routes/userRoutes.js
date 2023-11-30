const express = require('express');
const {getUserProfile, updateUser,followUnFollowUser,signUpUser, loginUser, logoutUser} = require('../controllers/userController');
const protectRoute = require('../middleware/protectRoutes');

const router = express.Router();
router.get("/profile/:query", getUserProfile)
router.post("/signup", signUpUser)
router.post("/login", loginUser)
router.post("/logout", logoutUser)
router.post("/follow/:id", protectRoute, followUnFollowUser) // toggle state(follow/unfollow)
router.post("/update/:id", protectRoute, updateUser) // toggle state(follow/unfollow)

module.exports = router;