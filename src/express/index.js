const express = require('express');
const app = express();

const doWork = (duration) => {
    const start = Date.now();
    while (Date.now() - start < duration) {  console.log('.')}
}

app.get('/', (req, res) => {
    doWork(5000);
    res.send('Hi there');
})

app.listen(3000);