/**
 * http://usejsdoc.org/
 */
var express = require("express");
var app = express();

var handlebars = require("express3-handlebars").create({defaultLayout: "main"});//
app.engine("handlebars",handlebars.engine);
app.set("view engine","handlebars");
app.set("port",process.env.PORT || 3000);
app.use(express.static(__dirname+"/public"));
var fortuneCookies = ["aaaaaa","bbbbbb","cccccc","dddddd"];
//get 방식으로 url, local:3000/
app.get("/",function(req,res){
	res.render("home");
});

app.get("/about",function(req,res){
	var reandomFurtune = fortuneCookies[Math.floor(Math.random()*fortuneCookies.length)];
	res.render("about",{fortune: reandomFurtune});
});
	//404 오류발생시 
	app.use(function(req,res,next) {
		res.status(200);
		res.render("404");
		
	});
//500오류 발생시
	app.use(function(err,req,res,next){
		console.err(err.statck);
		res.status(200);
		res.render("500");
	});
app.listen(app.get("port"),function(){
	console.log("Express started on http://localhost:"+app.get("port"));
	
});
