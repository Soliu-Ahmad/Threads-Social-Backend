const express = require ('express');
const {createPost, getPost, deletePost, likeUnlikePost, replyToPost} = require( "../controllers/postController")
const protectRoute = require ('../middleware/protectRoutes');

const router = express.Router();


router.get("/:id", getPost)
router.delete("/:id", protectRoute, deletePost);
router.post("/create", protectRoute, createPost)
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/reply/:id", protectRoute, replyToPost);


module.exports = router