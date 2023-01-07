const { writeFile, readFile } = require('fs');



//asyn - contains callbacks
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }

        const second = result;

        writeFile('./content/result_asyn.txt',
            `Here are your results: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result)
            })
    })
})

