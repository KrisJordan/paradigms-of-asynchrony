var fs = require('fs');

var copyFile = function(source, dest, callback) {

    var openSource,
        openDest,
        readBuffer,
        writeBuffer,
        closeFiles;

    openSource = function() {
        fs.open(source, 'r', function(err, sourceFd) {
            openDest(sourceFd);
        });
    };

    openDest = function(sourceFd) {
        fs.open(dest, 'w', function(err, destFd) {
            readBuffer(sourceFd, destFd);
        });
    };

    readBuffer = function(sourceFd, destFd) {
        fs.read(sourceFd, new Buffer(8), 0, 8, null, function(err,bytesRead,buffer) {
            if(bytesRead > 0) {
                writeBuffer(sourceFd, destFd, buffer, bytesRead);
            } else {
                closeFiles(sourceFd, destFd);
            }
        });

    };

    writeBuffer = function(sourceFd, destFd, buffer, bytes) {
        fs.write(destFd, buffer, 0, bytes, null, function(err, written, buffer) {
            readBuffer(sourceFd, destFd);
        });
    };

    closeFiles = function(sourceFd, destFd) {
        var filesClosed = 0;
        var fileCloseCallback = function() {
            filesClosed += 1;
            if(filesClosed == 2) {
                callback();
            }
        };
        fs.close(sourceFd, fileCloseCallback);
        fs.close(destFd, fileCloseCallback);
    };

    // Begin the Process
    openSource();
};

copyFile('test/a.txt','test/b.txt', function(err,success) {
    console.log('Copy complete!');
});
