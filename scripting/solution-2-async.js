var fs      = require('fs'),
    async   = require('async');

var copyFile = function(source, dest, callback) {
    async.waterfall([
        // Open Files
        function(beginCopyCallback) {
            async.parallel({
                source:   async.apply(fs.open, source,  'r', callback),
                dest:     async.apply(fs.open, dest,    'w', callback)
            },
            function(err, fd) {
                beginCopyCallback(null, fd.source, fd.dest);
            });
        },
        // beginCopyCallback
        function(sourceFd, destFd, closeFilesCallback) {
            var readNext = function() {
                fs.read(sourceFd, new Buffer(8), 0, 8, null, function(err, bytesRead, buffer) {
                    if(bytesRead > 0) {
                        fs.write(destFd, buffer, 0, bytesRead, null, readNext);
                    } else {
                        closeFilesCallback(null, sourceFd, destFd);
                    }
                });
            };
            readNext();
        },
        // closeFilesCallback
        function(sourceFd, destFd) {
            async.forEach([sourceFd, destFd], fs.close, function(err) {
                callback(null, true);
            });
        }
    ]);
};

copyFile('test/a.txt','test/b.txt', function(err,success) {
    console.log('Copy complete!');
});
