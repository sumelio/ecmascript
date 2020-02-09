process.env.UV_THREADPOOL_SIZE = 1;
console.log('process.env.UV_THREADPOOL_SIZE ', process.env.UV_THREADPOOL_SIZE)

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() {
    https
        .request('https://baidu.com', res => {
            res.on('data', () => { })
            res.on('end', () => {
                console.log('https:', Date.now() - start)
            });
        })
        .end();
}

function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('Hash:', Date.now() - start);
    })
}



fs.readFile('multitask.js', 'utf8', () => {
    console.log('F5:', Date.now() - start);


});
doHash();
doHash();
doHash();
doHash();

doRequest();