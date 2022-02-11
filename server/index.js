import express, { response } from 'express';
import bodyParser from 'body-parser';
import  mongoose  from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'//postroutes is the name given by us
const app= express();
app.use('/posts',postRoutes)
app.use(bodyParser.json({limit: '30mb',extended:true}));
app.use(bodyParser.urlencoded({limit: '30mb',extended:true}));
app.use(cors());

app.use('/',(req,res)=>{
    res.send("kamal")
})

const Connect_url = 'mongodb+srv://Kamal:mongoose@cluster0.kilbx.mongodb.net/dataset?retryWrites=true&w=majority'

// const PORT = process.env.PORT || 5000;
const PORT= 5000;

mongoose.connect(Connect_url,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        app.listen(PORT,()=> console.log(`Server is running on port: ${PORT}`))
    })
    .catch((error)=>{console.log(error.message)});
// mongoose.set('useFindAndModify',false);f