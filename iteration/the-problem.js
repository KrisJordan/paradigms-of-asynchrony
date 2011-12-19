var _   = require('underscore'),
    fs  = require('fs');

var files = [ 'test/a.txt', 'test/b.txt', 'test/c.txt' ];

var mtimeSync = function(file) {
    return fs.statSync(file).mtime.getTime();
}

var syncTimes = _.map(files, mtimeSync);
console.log(syncTimes);
// [ 1324235664000, 1324235673000, 1324235677000 ]
// That was easy!

var mtimeAsync = function(file,callback) {
    fs.stat(file, function(err, stat) {
        var error = null;
        callback(error, stat.mtime.getTime());
    });
};
var asyncTimes = _.map(files, mtimeAsync);
console.log(asyncTimes);
// Greetings & welcome to async callback hell!
//
// [ undefined, undefined, undefined ]
//
// KrisJordan/finding-salvation-in-callback-hell/the-problem.js:16
//         callback(null, stat.mtime.getTime());
//         ^
// TypeError: number is not a function
//     at Number.CALL_NON_FUNCTION (native)
//     at Object.oncomplete (KrisJordan/finding-salvation-in-callback-hell/the-problem.js:16:9)
