const fs = require('fs/promises')
const path=require("path")

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName+".txt",fileContent,(err)=>{console.log(err);})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile((path.join(__dirname,fileName+".txt")),{encoding:"utf-8"}).then((data,err)=>{
		console.log(data);
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile((path.join(__dirname,fileName+".txt")),fileContent,(err)=>{
		if(err){console.log(err);}
	})

}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(path.join(__dirname,fileName+".txt"));
}

myFileWriter("testfile","Hello");
myFileReader("testfile");
myFileUpdater("testfile"," World");
myFileReader("testfile");
myFileDeleter("testfile");

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }