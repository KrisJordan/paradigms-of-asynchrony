var _   = require('underscore'),
    fs  = require('fs');

var files = [ 'test/a.txt', 'test/b.txt', 'test/c.txt' ];

var mtimeAsync = function(file,callback) {
    fs.stat(file, function(err, stat) {
        var error = null;
        callback(error, stat.mtime.getTime());
    });
};

var asyncMap = function( arr, fnToMap, callback ) {
    var results = [],
        i       = 0,
        next    = function(err,prevMtime) {
                    if(err) {
                        callback(err);
                        return;
                    }

                    if(prevMtime != false) {
                        results.push(prevMtime);
                    }

                    if(i < arr.length) {
                        fnToMap(arr[i++], next);
                    } else {
                        callback(null, results);
                    }
                  };
        next(null,false);
};

asyncMap(files, mtimeAsync, function(err,asyncTimes) {
    console.log(asyncTimes);
    // [ 1324235664000, 1324235673000, 1324235677000 ]
    // It works!
});
