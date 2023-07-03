const router = require('express').Router();
const Blog = require('../models/Blog');

// Your routing code goes here


router.get('/blog',async (req,res)=>{
    try{
        const search=req.query.search;
    const page=req.query.page;
    const data=await Blog.find({"topic":{ "$regex": search, "$options": "i" }}).skip((Number(page)-1)*5).limit(5);
    res.json({status: "success",
    data
    });
    }catch(e){
        res.status(500);
        res.json({
            status:"Failed",
            message:e.message
        })
    }
    

})

router.get('/blogall',async (req,res)=>{
    try{
    const data=await Blog.find();
    res.json({status: "success",
    data
    });
    }catch(e){
        res.status(500);
        res.json({
            status:"Failed",
            message:e.message
        })
    }
    

})

router.post('/blog',async (req,res)=>{
    try{
    const entry=await Blog.create({
        ...req.body
    });
    res.json({
       status: "success",
       entry
   });
}catch(e){
    res.status(500);
    res.json({
        status:"Failed",
        message:e.message
    })
}

})
router.put('/blog/:id',async (req,res)=>{
    try{
    const entry=await Blog.updateOne({_id:req.params.id},{
        ...req.body
    });
    
    res.json({
       status: "success",
       entry
   });
}catch(e){
    res.status(500);
    res.json({
        status:"Failed",
        message:e.message
    })
}
})

router.delete('/blog/:id',async (req,res)=>{
    try{
    const entry=await Blog.deleteOne({_id: req.params.id});
    res.json({
       status: "success",
       entry
   });
}catch(e){
    res.status(500);
    res.json({
        status:"Failed",
        message:e.message
    })
}
})
module.exports = router;