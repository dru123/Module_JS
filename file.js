// let fs=require("fs");
let path=require("path");


//create->
// fs.openSync("Digit.js","w");
//readFile->
// let buffer=fs.readFileSync("CountDigit.js");
// console.log("hello " + buffer);
//create and write file->
// fs.writeFileSync("Hello.js","let a=90");
//UPDATE->
// fs.appendFileSync("Digit.js","HELLO  THIS IS  A JAVA SCRIPT PROJECT");


//FOLDER---------
//create folder
//  fs.mkdirSync("java");

 //append file in the folder
//  fs.writeFileSync("java/abc.txt","heloo");
//  fs.writeFileSync("java/abcd.txt","heloo2");fs.writeFileSync("java/abcde.txt","heloo3");



 //delete the file
//  fs.unlinkSync("ch")



 //readfile====>

//  let content=fs.readdirSync("java")//return an array
//  console.log(content);

//delete the file
//  for(let i=0; i< content.length;i++)
// {
//     fs.unlinkSync("java/"+content[i])//u have to pass in the string format
// }

// remove the folder
// fs.rmdirSync("java")

// for(let i=1;i<10;i++){
//  let dir=`Lecture-${i}`;
//  fs.mkdirSync(dir);
//  fs.writeFileSync(dir+"\\"+"readme.md",`# readme for  dir${i}`);
//fs.writeFileSync(path.join(dir+"readme.md"),`# readme for  dir${i}`)
// }

//join ->takii cross patform m koi isssue  n aye...

// used  to give the extension of file u want 
 let ext=path.extname(path.join(__dirname,"file.js"));

 console.log("ext",ext);
//used to give the name in whcih u r working
 let  name  =path.basename(__dirname);
 console.log(name);

 //used to when u have many folder u want to get last  name of file  
 name=path.basename(path.join(__dirname,"file.js"));
 console.log(name);