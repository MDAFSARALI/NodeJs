const fs = require('fs');
fs.unlink("./05/in.txt",function(err){
    if (err) {
        console.log("Error In deleting ");
    }
    else{
        console.log("File Deleted Successfully");
    }
});