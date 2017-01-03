/**
 * http://usejsdoc.org/
 */
var step = require("step");
var fs = require("fs");
var data;
step(function readdata() {
	fs.readFile("./data.txt","utf8",this);
},
function modifyData(err,data) {
	if(err){throw err;}
	console.log("text : " + data);
	return data.replace("example","modify");
},function writeData(err, data){
	if(err){throw err;}
	fs.writeFile("./data.txt",data,this);
}
		);