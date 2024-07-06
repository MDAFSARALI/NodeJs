const http = require('http');

const server=http.createServer((req,res)=>{
    if (req.url='/') {
        res.write("<h1>I Am Happy To Learn Full Stack Web Development From Pw Skills..</h1>")
    }
    else {
        res.write("<h1>Page Not Found ! You Have entered Into Wrong Page...</h1>")
    }
    res.end();
})
server.listen(1000);
console.log("The https server is running at port : 1000");
