const express = require('express');
const app = express();
// const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.get('/mario',async (req,res)=>{
  try{  const data=await marioModel.find();
    res.json({
        status:"success",
        data
    })}catch(e){
        res.status(500).json({
            status:"Failed",
            message: e.message
        });
    }
})
app.get('/mario/:id',async (req,res)=>{
    try{
        const data=await marioModel.find({_id:req.params.id});
        res.json({
            status:"success",
            data
        })
    }catch(e){
        
        res.status(400).json({
            message: e.message
        })
    }
})

app.post('/mario',async(req,res)=>{
    try{
        const data=await marioModel.create({
            name:req.body.name,
            weight:req.body.weight
        })
        res.status(201).json({
            status:"success",
            data
        })

    }catch(e){
        res.status(400).json({
            status:"Failed",
            message:e.message
        })
    }
})

app.patch('/mario/:id',async (req,res)=>{
    try{
        const data=await marioModel.updateOne({_id:req.params.id},{
            ...req.body
        })
        res.status(201).json({
            status:"success",
            data
        })

    }catch(e){
        res.status(400).json({
            status:"Failed",
            message:e.message
        })
    }
})

app.delete('/mario/:id',async (req,res)=>{
    try{
        await marioModel.deleteOne({_id:req.params.id})
        res.status(200).json({
            status:"success",
            message: 'character deleted'
        })

    }catch(e){
        res.status(400).json({
            status:"Failed",
            message:e.message
        })
    }
})


// your code goes here



module.exports = app;