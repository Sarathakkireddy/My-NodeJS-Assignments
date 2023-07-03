var http = require("http");

const httpServer = http.createServer(handleServer);

//||req.url==="/"
function handleServer(req, res) {
  if(req.url==="/welcome"){
    res.writeHead(200,{"content-type":"text/plain"});
    res.end( "Welcome to Dominos!");
  }else if(req.url==="/contact"){
    res.writeHead(200,{"content-type":"application/json"});
    res.end(JSON.stringify({phone: '18602100000', email: 'guestcaredominos@jublfood.com' }))
  }else{
    res.writeHead(404,{"content-type":"text/plain"});
    res.end("404 Page not found");
  }
}
httpServer.listen(8081,()=>console.log("server is up at 8081"));
module.exports = httpServer;