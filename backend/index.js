import express from 'express';
import blogRoute from './Routes/blogRoute.js';
import './Connection/Database.js';
const app = express();


 app.use(express.json());
app.use('/api/blog', blogRoute);




app.listen(5000, () =>{
    console.log("http://localhost:5000");
})

app.use(express.json());