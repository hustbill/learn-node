/*
Name: meet_pipe.js
Date: March 14, 2016
You will get a file as the first argument to your program (process.argv[2]).

Use `fs.createReadStream()` to pipe the given file to `process.stdout`.
*/


var fs = require('fs');

fs.createReadStream(process.argv[2]).pipe(process.stdout);