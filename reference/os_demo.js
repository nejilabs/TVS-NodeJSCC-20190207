const os = require('os');

//Platform
console.log(os.platform()) //darwin

//CPU architecture
console.log(os.arch()) //x64
//CPU Core Info
console.log(os.cpus());

//Free Memory
console.log(os.freemem());
//Total Memory
console.log(os.totalmem());

//Home Directory
console.log(os.homedir());

//OS Uptime
console.log(os.uptime());
