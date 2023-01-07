const os = require('os');

//info about current user

const user = os.userInfo();
console.log(user);

//methode to show how long the system has been running
console.log(`This pc has seen an uptime of ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)