import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title:{type:String, required:true},
    post:{type:String, required:true},
    post_date:{type:Date, default:Date.now()},
    author:{type:String, required:true}
});

const Blog = mongoose.model('BLOG', blogSchema);
export default Blog;