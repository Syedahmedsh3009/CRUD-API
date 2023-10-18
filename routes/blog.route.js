const express = require("express");
const {
  createBlog,
  getBlogs,
  getBlog,
  updateBlog,
  softDeleteBlog,
  getDeletedBlogs,
} = require("../controllers/blog.controller");
const router = express.Router();
router.post("/create", createBlog);
router.get("/", getBlogs);
router.get("/trash", getDeletedBlogs);
router.get("/:id", getBlog);  //get blog by ID
router.put("/:id", updateBlog);
router.put("/delete/:id", softDeleteBlog);
module.exports = router;
