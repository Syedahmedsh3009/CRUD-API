const Blog = require("../models/blog.model");

module.exports.createBlog = async (req, res, next) => {
  try {
    const { title, description, category } = req.body;
    if (!title | !description | !category) {
      return res.json({ msg: "fill the details correctly" });
    }
    const blog = await Blog.create(req.body);
    return res.json(blog);
  } catch (e) {
    next(e);
  }
};
module.exports.getBlogs = async (req, res, next) => {
  try {
    Blog.find({deleted:false})
      .then((blogs) => {
        return res.json(blogs);
      })
      .catch((e) => next(e));
  } catch (e) {
    next(e);
  }
};
module.exports.getDeletedBlogs = async (req, res, next) => {
    try {
      Blog.find({deleted:true})
        .then((blogs) => {
          return res.json(blogs);
        })
        .catch((e) => next(e));
    } catch (e) {
      next(e);
    }
  };
module.exports.getBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    Blog.findOne({ _id: id })
      .then((blog) => {
        return res.json(blog);
      })
      .catch((e) => next(e));
  } catch (e) {
    next(e);
  }
};
module.exports.updateBlog = (req, res, next) => {
  try {
    const { id } = req.params;
    Blog.findByIdAndUpdate(id, req.body, { new: true })
      .then((updatedblog) => {
        return res.json(updatedblog);
      })
      .catch((e) => next(e));
  } catch (e) {
    next(e);
  }
};
module.exports.deleteBlog = (req, res, next) => {
  try {
    const { id } = req.params;
    Blog.findByIdAndDelete(id)
      .then(() => res.json("Blog deleted"))
      .catch((e) => next(e));
  } catch (e) {
    next(e);
  }
};
module.exports.softDeleteBlog = (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    Blog.findByIdAndUpdate(id, { deleted: true })
      .then(() => res.json("Blog deleted"))
      .catch((e) => next(e));
  } catch (e) {
    next(e);
  }
};
