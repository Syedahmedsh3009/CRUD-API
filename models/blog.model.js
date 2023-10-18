const {Schema, model }= require('mongoose');

const BlogSchema = new Schema({
  title: {required: true, type: String},
  description:  {required: true, type: String},
  category:  {required: true, type: String},
  createdAt:  {default: Date.now(), type: Date},
  deleted:  {default: false, type: Boolean},
});
const Blog = model('blog', BlogSchema);
module.exports=Blog;