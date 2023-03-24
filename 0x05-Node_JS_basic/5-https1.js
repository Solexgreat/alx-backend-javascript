const http = require('http')

const students = require('./3-read_file_async');
const hostname = '127.0.0.1';

const app = http.createServer((req, res) => {
    res.writeHead(200,{'content-Type': 'text/plain'});

    if (req.url === '/' ) {
        res.end('Hello Holberton School!')
    } else if (req.url === '/students') {
        res.write('This is the list of our students')
    }
    students(process.argv[2]).then((data) => {
        res.write(`Number of students: ${data.numberofStudents}\n`);
        res.write(`Number of students in CS: ${data.CSlist}\n`);
        res.write(`Number of students in SWE: ${data.SWElist}`);
        res.end()
    }).catch((err) => res.end(err.message))
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})

module.exports = app;