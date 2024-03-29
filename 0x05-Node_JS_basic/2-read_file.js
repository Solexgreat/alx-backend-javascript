const fs = require('fs');

function countStudents(path) {
    try{
        const file = fs.readFileSync(path, 'utf8')
        const lines = file.trim().split('\n')
        const numberofStudents = lines.length - 1
        console.log(`Number of students: ${numberofStudents}`)
        let field1 = 0;
        let field2 = 0;
        const listOfFirstNameF1 = [];
        const listOfFirstNameF2 = [];
        for (let i = 1; i <= numberofStudents; i++){
            const line = lines[i].trim('\r').split(',');
            for (let j = 0; j < line.length; j++) {
                if (line[j] == 'CS') {
                    listOfFirstNameF1.push(line[0])
                    field1 += 1;
                } else if (line[j] == 'SWE') {
                    listOfFirstNameF2.push(line[0])
                    field2 += 1;
                }
            }
        }
        console.log(`Number of students in CS: ${field1}. List: ${listOfFirstNameF1}`)
        console.log(`Number of students in SWE: ${field2}. List: ${listOfFirstNameF2}`)
    }catch(err){
        throw new Error('Cannot load the database')
    }
}

module.exports = countStudents;

