const fs = require('fs');
const { buffer } = require('stream/consumers');
fs.readFile("./03/in.txt",function(err,data){
    if (err) {
        console.log("Error in reading");
    }
    else{
        console.log(data.toString());
    }
});