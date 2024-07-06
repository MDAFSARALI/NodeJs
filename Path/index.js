const path=require("path");

// console.log(path.sep);  // --->(\)window and (/)mac,linux

// console.log(process.env.PATH);
/* ;(window) and : (mac/linux) */



// console.log(path.delimiter);



const filePath='C:\Users\User\OneDrive\Desktop\CODING\Web development_pw_skills\NodeJs';




const currentFilePath=__filename;
// console.log(currentFilePath);

// console.log(__dirname);

/*
let basename=path.basename(currentFilePath);
console.log('BaseName--->',basename);//index.js


let baseNameWithoutExtension=path.basename(currentFilePath,'.js');
console.log('BaseNameWithoutExtension--->',baseNameWithoutExtension);

let dirName=path.dirname(currentFilePath);
console.log('DirectoryName--->',dirName);


*/

/*
console.log('extension',path.extname(currentFilePath));

console.log('extension2',path.extname('index.md.js'));



let pathToFile=path.format({
    dir:'C:\Users\User\OneDrive\Desktop',
    base:'index.js'
})

console.log('pathToFile---->',pathToFile);

*/

// "Which ever starting with c:/ or D:/ which is absolute "

/*
console.log('IsAbsolute',path.isAbsolute(currentFilePath));

console.log('IsAbsolute',path.isAbsolute('/index.js'));

console.log('IsAbsolute',path.isAbsolute('./index.js'));

console.log('IsAbsolute',path.isAbsolute('../index.js'));

*/


/*

let pathToDir=path.join('/Home','js','dist','index.js');

console.log(pathToDir);


console.log('parse>>>',path.parse(currentFilePath));



console.log("relative path ",path.relative('/Home/User/config','/Home/User/js/'));

*/
console.log("Resolve--->",path.resolve());

console.log("Normalize--->",path.normalize('\\Home/User\\\Js'));

