const http = require("http");
const server = http.createServer(()=>{
    console.log("Server is working.")
})
server.listen(5000,()=>{
    console.log("Server is working");
})