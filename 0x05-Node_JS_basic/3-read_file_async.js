const fs = require('fs')

function countStudents(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
               throw Error('Cannot load the database');
            } else {
                const lines = data.trim().split('\n')
                const numberofStudents = lines.length - 1
                console.log(`Number of students: ${numberofStudents}`)
                let field1 = 0;
                let field2 = 0;
                const CSlist = [];
                const SWElist = [];
                for (let i = 1; i <= numberofStudents; i++){
                    const line = lines[i].trim('\r').split(',');
                    for (let j = 0; j < line.length; j++) {
                        if (line[j] == 'CS') {
                            CSlist.push(line[0])
                            field1 += 1;
                        } else if (line[j] == 'SWE') {
                            SWElist.push(line[0]);
                            field2 += 1;
                        }
                    }
                }
                console.log(`Number of students in CS: ${field1}. List: ${CSlist}`);
                console.log(`Number of students in SWE: ${field2}. List: ${SWElist}`);
                return(numberofStudents, CSlist, SWElist);
            }

        })
    })
}

module.exports = countStudents;

