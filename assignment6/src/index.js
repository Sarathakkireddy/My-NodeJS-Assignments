const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// ,{ useNewUrlParser: true, useUnifiedTopology: true }
dotenv.config();
//connect to DB
mongoose.connect(process.env.DATABASE_URL).then(()=>{
     console.log('connected to DB');
    }).then(()=>{
        app.listen(3000, () => console.log('Server running......'));
    })



    // DATABASE_URL=mongodb://localhost/blogs