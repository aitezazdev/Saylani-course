const { log } = require('console');
const os = require('os');

console.log('Architecture:', os.arch());

console.log('Operating System:', os.type());

console.log('up time:', os.uptime());

console.log('memory:', os.totalmem());

console.log('version:', os.version());

console.log('user info:', os.userInfo());

console.log("temp dir:", os.tmpdir());

