/**
 * http://usejsdoc.org/
 * fs.js : 파일 정보 저장 모듈
 */
var fs = require("fs");
fs.rename("./objects1.js","./objects2.js",function(err){
	if(err){ throw err;}
	console.log("renamed complate");
});
fs.stat("./objects2.js",function(err,stats){
	if(err){ throw err;}
	console.log("stats:"+JSON.stringify(stats));
});
