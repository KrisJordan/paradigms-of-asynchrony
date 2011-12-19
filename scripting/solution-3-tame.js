var fs      = require('fs');

var copyFile = function(source, dest, callback) {
    // Open Files
    await {
        fs.open(source, 'r', defer(err, sourceFd));
        fs.open(dest,   'w', defer(err, destFd));
    }

    // Copy
    do {
        await {
            fs.read(sourceFd, new Buffer(8), 0, 8, null, defer(err, bytesRead, buffer));
        }
        await {
            fs.write(destFd, buffer, 0, bytesRead, null, defer());
        }
    } while( bytesRead > 0 );

    // Close Files
    await {
        fs.close(sourceFd,  defer());
        fs.close(destFd,    defer());
    }

    // Fin
    callback(null, true);
};

copyFile('test/a.txt','test/b.txt', function(err,success) {
    console.log('Copy complete!');
});
