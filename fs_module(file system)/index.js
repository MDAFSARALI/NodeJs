const fs = require('fs');
const { buffer } = require('stream/consumers');


// Asynchronous way to read file

/*

console.log('Read Started ....');
fs.readFile('input.txt',function(err,data){
    if(err){
        console.log('Error : ',err);
        return err;
    }
    console.log('Data :',data.toString());
    console.log('Read Ended...');
    return data;
});

console.log('Other Stuff....');

*/

// synchronous way to read file


/*
console.log('Read Started ....');
var data=fs.readFileSync('input.txt');
console.log('Data',data.toString());
console.log('Read Ended...');
console.log('Other Stuff....');

*/


// Using Low Level API :--->

//      Read----> Open + Read


/*

const buff=new Buffer(1024);

fs.open('input.txt','r+',function (err,fd){
    if (err) {
        console.log('Error in opening file : ',err);
    }
    console.log('File has been opened successfully....');

    fs.read(fd,buff,0,buff.length,0,function (er,bytes){
        if (er) {
            console.log('Error in reading file  : ',er);
        }
        console.log('Data is : ',bytes);
        console.log('Data ',buff.slice(0,bytes).toString());
    })
})



*/


/*.....................Writing the contents to a new file.............................  */
// In this case data will be overwritten
/*
fs.writeFile('input.txt','PW SKILlS',function (err){
    if (err) {
        console.log('Error Occured during writing to the file....');
    }
    else{
        console.log('Writing is successfully....');
    }
});

*/

// Appending data to the file...

fs.appendFile('./input.txt','----Kolkata','utf-8',function(err){
    if (err) {
        console.log('Error Occured during appending to the file....');
    }
    else{
        console.log('Writing is successfully....');
    }
})




/*              Closing the file             */ 
/*

const buff=new Buffer(1024);

fs.open('input.txt','r+',function (err,fd){
    if (err) {
        console.log('Error in opening file : ',err);
    }
    console.log('File has been opened successfully....');

    fs.read(fd,buff,0,buff.length,0,function (er,bytes){
        if (err) {
            console.log('Error in reading file  : ',er);
        }
        console.log('Data is : ',bytes);
        console.log('Data ',buff.slice(0,bytes).toString());
        fs.close(fd,function(err){
            if (err) {
                console.log('Error in closing the file ....');
            }
            console.log('Success in closing the file.....');
        })
    })
})


*/


// Deleting file


// fs.unlink('input.txt',function(err){
//     if (err) {
//         console.log('Error in deleting file...');
//     }
//     else{
//         console.log('Success in deleting file...');
//     }
// })





































































































