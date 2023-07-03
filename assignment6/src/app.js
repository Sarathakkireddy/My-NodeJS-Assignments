const express = require('express');
const app = express();
const bodyParser= require('body-parser');

// Import routes
const blogRoute = require('./routes/blog');


//Router MIddlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', blogRoute);
app.get('*',(req,res)=>{
    
    res.status(404).json({
        status:"Failed",
        message: "API not found"
    })
})
module.exports = app;
