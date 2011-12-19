var async   = require('async'),
    _       = require('underscore'),
    fs      = require('fs');

var files = [ 'test/a.txt', 'test/b.txt', 'test/c.txt' ];

var mtimeAsync = function(file,callback) {
    fs.stat(file, function(err, stat) {
        var error = null;
        callback(error, stat.mtime.getTime());
    });
};

async.map(files, mtimeAsync, function(err,asyncTimes) {
    console.log(asyncTimes);
    // [ 1324235664000, 1324235673000, 1324235677000 ]
});

async.mapSeries(files, mtimeAsync, function(err,asyncTimes) {
    console.log(asyncTimes);
    // [ 1324235664000, 1324235673000, 1324235677000 ]
});
