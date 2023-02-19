const crypto = require('crypto');
//console.dir(crypto);

const id = crypto.randomBytes(16).toString('hex');
console.log(id);
