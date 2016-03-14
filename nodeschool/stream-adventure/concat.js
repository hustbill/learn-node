/*
Name: concat.js
Date: March 14,2016
You will be given text on process.stdin. 
Buffer the text and reverse it using the `concat-stream` module
 before writing it to stdout.
*/

var concat = require('concat-stream');
// var http = require('http');

/* 
var server = http.createServer(function (req, res) {
	if (req.method === 'POST') {
		req.pipe(concat(function(body) {
			var obj = JSON.parse(body);
			res.end(Object.keys(obj).join('\n'));
		}))
	}
	else res.end();
});
server.listen(5000);  */

process.stdin.pipe(concat( function (src) {
	var s = src.toString().split('').reverse().join('');
	console.log(s);
}));