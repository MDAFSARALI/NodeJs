const fs = require('fs');
fs.writeFile("nodejs_architecture.txt","Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused o n input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet",function(err){
    if (err) {
        console.log("Error");
    }
    else{
        console.log("Successfully created");
    }
})