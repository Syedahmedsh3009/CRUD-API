const express = require('express');
const conn=require('./config/db.js');
const app=express();
const userRouter=require('./routes/user.route.js');
const blogRouter=require('./routes/blog.route.js');
const authentication = require('./middlewares/auth.js');
app.use(express.json());
app.use('/user', userRouter);
app.use('/blog',authentication,  blogRouter);
require('dotenv').config()

app.listen(process.env.PORT, async()=>{
    await conn
    console.log(`Server started at port ${process.env.PORT}`);
})