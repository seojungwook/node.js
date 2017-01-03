/**
 * http://usejsdoc.org/
 */
var http = require("http");
var url = require("url");
var queryString = require("querystring");
function start(route) {
	function onRequest(request,response) {
		var pathname = url.parse(request.url).pathname;
		var query = url.parse(request.url).query;
		
		var param1 = queryString.parse(query);
		var param2 = queryString.parse(query);
		
		
		console.log("Request for "+ pathname + " received.");
		route(pathname,param1,param2);//함수안에 함수를 매개 변수로 !!!!!! 사용가능 
		response.writeHead(200,{"Content-Type":"text/plain"});
		
		response.write("hello world");
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("server has started");
}
exports.start = start;