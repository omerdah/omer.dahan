//import modules
const express = require("express");
const path = require ("path");

// init the app
const app = express();

// use static files located in 'public' dir
app.use(express.static('public'));

// home route
app.get('/', (req,res)=>{
    res.send('Hello BIT');
});

// index.html route
app.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'));
});
// set server to listen at port
app.listen(3000, ()=>{
    console.log('Server is running at port 3000...')
});
