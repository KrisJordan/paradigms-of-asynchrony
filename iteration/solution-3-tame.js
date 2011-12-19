var _   = require('underscore'),
    fs  = require('fs');

var files = [ 'test/a.txt', 'test/b.txt', 'test/c.txt' ];

var mtimeAsync = function(file,callback) {
    fs.stat(file, function(err, stat) {
        var error = null;
        callback(error, stat.mtime.getTime());
    });
};

// Failed Attempt
// var syncMap = function( arr, fnToMap ) {
//     var results = [];
//     for(var i = 0; i < arr.length; i++) {
//         await {
//             fnToMap( arr[i], defer(err, result) );
//         }
//         results.push(result);
//     }
//     return results;
// }
// 
// console.log( asyncMap(files, mtimeAsync) );
// TypeError: undefined is not a function
//     at /finding-salvation-in-callback-hell/solution-3-tame.js:106:21

var asyncMap = function( arr, fnToMap, callback ) {
    var results = [],
        i = 0;

    while(i < arr.length) {
        await {
            fnToMap( arr[i], defer(err, result) );
        }
        results[i] = result;
        i++;
    }

    callback(null, results);
};

// Roughly what tame.js must be translating this to.
var asyncMap = function( arr, fnToMap, callback) {
    var results = [],
        i = 0;

    var beginWhile,
          enterAwait,
          continueAfterAwait,
        afterWhile;

        // while () {
        beginWhile = function() {
            if(i < arr.length) {
                enterAwait();
            } else {
                afterWhile();
            }
        };
        
        //  await {
        //     fnToMap( arr[i], defer(err, result) );
        //  }
        enterAwait = function() {
            fnToMap(arr[i], continueAfterAwait);
        };

        //     result[i] = result;
        //     i++;
        // } // EndWhile
        continueAfterAwait = function(err, result) {
            results[i] = result;
            i++;
            beginWhile();
        };

    // callback(null, results);
    afterWhile = function() {
        callback(null, results);
    };

    // Begin execution of the while loop
    beginWhile();
};

var asyncMap = function( arr, fnToMap, callback ) {
    var results = [],
        single = function( i, callback ) {
            await {
                fnToMap(arr[i], defer(err, result));
            }
            results[i] = result;
            callback();
        };

    var i = 0;
    await {
        while(i < arr.length) {
            single(i, defer());
            i++;
        }
    }
    callback(null, results);
};

asyncMap(files, mtimeAsync, function(err, asyncTimes) {
    console.log(asyncTimes);
    // [ 1324235664000, 1324235673000, 1324235677000 ]
    // It works!
});
