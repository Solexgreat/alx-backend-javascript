process.stdin.setEncoding('utf8')

process.stdout.write('Welcome to Holberton School, what is your name?\n')

process.stdin.on('readable', () =>{
    const data = process.stdin.read()
    if (data !== null) {
        const name = data.trim()
        process.stdout.write(`Your name is: ${name}\n`)
    }
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
})
