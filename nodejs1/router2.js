/**
 * http://usejsdoc.org/
 */
function route(pathname,param1,param2) {
	console.log("request pathname:"+ pathname);
	console.log("request param1:"+ param1);
	console.log("request param2:"+ param2);
}
exports.route = route;