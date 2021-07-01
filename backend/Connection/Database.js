import mongoose from 'mongoose';

const databse = `mongodb+srv://himanchalmalla:password1234@cluster0.ggz1b.mongodb.net/BLOG?retryWrites=true&w=majority`

mongoose.connect(databse, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
}).then( () =>{
    console.log("connected")
}).catch( err => console.log(err));
