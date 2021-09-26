// export modules
const express = require('express');
const path = require ('path');
const port = 3000;

// init app
const app = express();

// set view engine to pug
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

// homepage route
app.get('/',function(req,res){
    //res.send("Hello Pug");
    res.render('index', {
        var1: 'What is PUG?',
        var2: 'PUG is view engine for node and express'
    });
});

// set server tp listen in port
app.listen(port, ()=>{
    console.log("Server is running on port "+port);
});