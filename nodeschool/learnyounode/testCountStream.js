// Use asset module for a quick test to CountStream 
// Date: March 13, 2016
// Name: testCountStream.js

var assert = require('assert');
var CountStream = require('./CountStream');
var countStream = new CountStream('example');
var fs = require('fs');
var passed = 0;

countStream.on('total', function(count) {
	assert.equal(count, 1);
	passed++;
});

fs.createReadStream(__filename).pipe(countStream);

process.on('exit', function() {
	console.log('Assertion passed:', passed);
});