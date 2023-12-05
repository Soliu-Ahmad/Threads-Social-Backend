const express = require ('express');
const {createPost, getPost, deletePost} = require( "../controllers/postController")
const protectRoute = require ('../middleware/protectRoutes');

const router = express.Router();


router.get("/:id", getPost)
router.delete("/:id", protectRoute, deletePost);
router.post("/create", protectRoute, createPost)


module.exports = router