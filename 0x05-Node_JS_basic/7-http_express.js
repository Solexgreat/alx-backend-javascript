const express = require('express');
students = required('./3-read_file_async')

const app = express();
const port = 1234;
const hostname = '127.0.0.1';

app.get('/', (req, res) => {
    res.writeHead(200, {'content-Type': 'text/plain'})
    res.send('Hello Holberton School!')
});

app.get('/students', async (req, res) =>{
    res.writeHead(200, {'content-Type': 'text/plain'})
    res.send('This is the list of our students')
    students(process.argv[2]).then((data) => {
        res.write(`Number of students: ${data.numberofStudents}`)
        res.write(`Number of students in CS: ${data.field1}. List: ${data.CSlist}`)
        res.write(`Number of students in SWE: ${data.field2}. List: ${data.SWElist}`)
    }).catch((err) => res.write(err.message))
      .finally(() => {
        res.end();
      })
})

app.listen(port, hostname => {
    console.log(`Server running at http://${hostname}:${port} `)
})

module.exports = app;
