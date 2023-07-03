const fs=require('fs');
const http=require('http');
// const path=require('path');

fs.writeFile("index.html","<h1> Hello World </h1><p> This is sarath... </p>",(err)=>{
    console.log(err);
})
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            res.write(data.toString());
            res.end();
    })
   }
  
})
server.listen(5000,()=>{console.log("server is starated on 5000 port");})