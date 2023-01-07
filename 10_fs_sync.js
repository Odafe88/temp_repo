const { writeFileSync, readFileSync } = require('fs');

//synchronous reading
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//synchronous writing to the file
writeFileSync('./content/result.txt', `This is the overwriting of the content ${first}, ${second}`)

//appending to the end of the file
writeFileSync('./content/result.txt', `This is the overwriting of the content ${first}, ${second}`, { flag: 'a' })


console.log(first, second);