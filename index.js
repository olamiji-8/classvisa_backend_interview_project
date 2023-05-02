const https = require("https");
 const server = https.createServer("/", function(req,res){
    res.write("Hello world");
    res.end()
})

server.listen( 8000, ()=> console.log("This server is connected to port 8000"));


