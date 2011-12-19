var fs = require('fs');

var copyFile = function(source, dest, callback) {
    // Open Source File
    fs.open(source, 'r', function(err, sourceFd) {
        // Open Destination File
        fs.open(dest, 'w', function(err, destFd) {
            var readNext = function() {
                // Read in to Buffer
                fs.read(sourceFd, new Buffer(8), 0, 8, null, function(err,bytesRead,buffer) {
                    if(bytesRead > 0) {
                        // Write out from Buffer
                        fs.write(destFd, buffer, 0, bytesRead, null, function(err, written, buffer) {
                            // Recur
                            readNext();
                        });
                    } else {
                        // If nothing left to read, close both files
                        // before calling copyFile's callback.
                        var filesClosed = 0;
                        var fileCloseCallback = function() {
                            filesClosed += 1;
                            if(filesClosed == 2) {
                                callback();
                            }
                        };
                        fs.close(sourceFd, fileCloseCallback);
                        fs.close(destFd, fileCloseCallback);
                    }
                });
            };
            // Begin the reading process.
            readNext();
        });
    });
};

copyFile('test/a.txt','test/b.txt', function(err,success) {
    console.log('Copy complete!');
});
