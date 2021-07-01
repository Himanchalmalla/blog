import express from 'express';
import Blog from '../Model/blogModel.js';
const router = express.Router();

router.get('/',  async(req, res) =>{
    try {
    const blogs = await Blog.find();
    if(blogs){
        res.status(200).json(blogs);
    }else{
        res.status(400).json("No Data Found on Database!!")
    }
    } catch (e) {
    console.log(e);
    }
});


router.post('/', async (req, res) =>{
    const  {title, post, author} = req.body;
    if(!title || !post || !author){
        res.status(401).json({Error:"Empty Field Found"});
    }
  try {
      const blog = new Blog({title, post, author});
      const newBlog =await blog.save();
      if(newBlog){
        console.log(req.body);
        res.status(200).json({Message: "New Blog Added"});
      }else{
          res.status(400).json({message:"Failed to add Blog"});
      }
  
  } catch (e) {
  console.log(e)
  }
})

router.patch('/:id', async (req, res) =>{
const id = req.params.id;
const {title, post, author} = req.body;
try {
const updatedBlog = await Blog.findById(id);
if(title){
    updatedBlog.title = title;
}
if(post){
    updatedBlog.post=post;
}
if(author){
    updatedBlog.author = author;
}

const newUpdatedBlog = await updatedBlog.save();
if(newUpdatedBlog){
    res.status(200).json("Blog Updated");
}else{
    res.status(400).json("Failed to update");
}
} catch (e) {
console.log(e);
res.status(400).json("Failed to update");
}
})

router.get('/:id', async(req, res) =>{
const id = req.params.id
try {
    const blog = await Blog.findById(id);
    if(blog){
        res.status(200).json(blog);
    }else{
        res.status(400).json("No Data Found!!")
    }
} catch (e) {
console.log(e);
}
})

router.delete('/:id', async (req, res) =>{
const id = req.params.id
try {
const stat = await Blog.findByIdAndDelete(id);
if(stat){
    res.status(200).json("Blog Data Deleted")
}else{
    res.status(400).json("No data Found to Delete");
}
} catch (e) {
    res.status(400).json("No data Found to Delete");
    // console.log(e);
}
})
export default router;