const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000;

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

let resp={};
let uplimit=1000000;
let downlimit=-1000000;
function invalid(num1,num2){
    if(num1===NaN||num2===NaN){
        resp={"status": "error",
        "message": "Invalid data types"
       }
       return true;
    
    }
    return false;
}

function limit(num1,num2,rslt){
    if(num1>uplimit||num2>uplimit||rslt>uplimit){
        resp={"status": "error",
        "message": "Overflow"
        }
        return true;
    }else if(num1<downlimit||num2<downlimit||rslt<downlimit){
        resp={"status": "error",
        "message": "Underflow"
        }
        return true;
    }
    return false;
}

function add(num1,num2){
    let rslt=num1+num2;
    if(invalid(num1,num2)){
        return resp;
    }else if(limit(num1,num2,rslt)){
        return resp;
    }else{
        
        return resp={status: "success",
        message: "the sum of given two numbers", 
        sum: rslt
        }
    }
}
function sub(num1,num2){
    let rslt=num1-num2;
    if(invalid(num1,num2)){
        return resp;
    }else if(limit(num1,num2,rslt)){
        return resp;
    }else{
        
        return resp={status: "success",
        message: "the difference of given two numbers", 
        difference: rslt
        }
    }
}

function multiply(num1,num2){
    let rslt=num1*num2;
    if(invalid(num1,num2)){
        return resp;
    }else if(limit(num1,num2,rslt)){
        return resp;
    }else{
        
        return resp={status: "success",
        message: "The product of given numbers", 
        result: rslt
        }
    }
}

function divide(num1,num2){
    let rslt=num1/num2;
    if(invalid(num1,num2)){
        return resp;
    }else if(num2===0){
        return resp={"status": "error",
        "message": "Cannot divide by zero"}
    }else if(limit(num1,num2,rslt)){
        return resp;
    }else{
        
        return resp={status: "success",
        message: "The division of given numbers", 
        result: rslt
        }
    }
}

app.get("/",(req,res)=>{
    res.send("Hello World!");
})

app.post("/sub",(req,res)=>{
    const num1=Number(req.body.num1);
    const num2=Number(req.body.num2);
    res.json(sub(num1,num2))
    resp={};
})

app.post("/add",(req,res)=>{
    const num1=Number(req.body.num1);
    const num2=Number(req.body.num2);
    res.json(add(num1,num2))
    resp={};
})



app.post("/multiply",(req,res)=>{
    const num1=Number(req.body.num1);
    const num2=Number(req.body.num2);
    res.json(multiply(num1,num2))
    resp={};
})

app.post("/divide",(req,res)=>{
    const num1=Number(req.body.num1);
    const num2=Number(req.body.num2);
    res.json(divide(num1,num2))
    resp={};
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;