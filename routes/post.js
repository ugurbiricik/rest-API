const express = require("express");
const {
  getPosts,
  createPosts,
  getDetail,
  getUpdate,
  deletePost,
  searchPost,
} = require("../controllers/post.js");
const auth = require("../middleware/auth.js");


const router = express.Router();

router.get("/getPosts", getPosts);
router.post("/createPost",auth, createPosts);
router.get("/getDetail/:id", getDetail);
router.patch("/getUpdate/:id",auth, getUpdate);
router.delete("/deletePost/:id",auth, deletePost);
router.get("/searchPost", searchPost);

module.exports = router;
