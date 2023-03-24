const http = require('http')

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
    res.writeHead(200, {'content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n')
});

app.listen(port, hostname);

module.exports = app;
