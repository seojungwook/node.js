/**
 * http://usejsdoc.org/
 * process 내장객체 : 프로그램 관련 정보를 저장하는 객체
 *  
 */
console.log("-process args:" + process.argv);
console.log("-process env:" + process.env);
console.log("-process version:" + process.version);
console.log("-process versions:" + process.versions);
console.log("-process arch:" + process.arch +"\n");
console.log("-process platform:" + process.platform+"\n");
console.log("-process memoryUsage:" + process.memoryUsage()+"\n");
console.log("-process uptime:" + process.uptime()+"\n");

//os: 운영체제 관련정보 저장 모듈
var os = require('os');
console.log("-os tmpdir:"+os.tmpdir());
console.log("-os hostname():"+os.hostname());
console.log("-os type():"+os.type());
console.log("-os platform():"+os.platform());
console.log("-os arch():"+os.arch());
console.log("-os uptime():"+os.uptime());
console.log("-os loadavg():"+os.loadavg());
console.log("-os totalmem():"+os.totalmem());
console.log("-os freemem():"+os.freemem());
console.log("-os os.networkInterfaces():"+os.networkInterfaces());

//crypto ㅇ마호화 모듈!
var crypto  = require("crypto");
var key = "websecretkey";
var input = "12345678";

var cipher = crypto.createCipher("aes192",key);
cipher.update(input,"utf-8","base64");
var ciperOutput = cipher.final("base64");//base64 64비트씩 끈어서 암호 화 하겠다는 소리 !!!!
var decipher = crypto.createDecipher("aes192",key);
decipher.update(ciperOutput,"base64","utf-8");
var decipherOutput = decipher.final("utf-8");

console.log("input:"+input);
console.log("cipherOutput:"+ciperOutput);
console.log("de:"+decipherOutput);
