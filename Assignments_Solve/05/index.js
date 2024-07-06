const fs = require('fs');
const { buffer } = require('stream/consumers');
fs.appendFile("./04/in.txt","y scalable and provides high performance. Node js is also flexible with multiple framework s and makes the development process easier.Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible wit",function(err,data){
    if (err) {
        console.log("Error");
    }
    else{
        fs.readFile("./04/in.txt",function(err,data){
            if (err) {
                console.log("Error in reading");
            }
            else{
                console.log(data.toString());
            }
        });
    }
})