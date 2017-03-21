const fs = require('fs');

const data = 'Simply Easy Learning';

//Creat a writable stream
const writeStream = fs.createWriteStream('output.txt');
writeStream.write(data, 'UTF8');
writeStream.end();

writeStream.on('finish', function() {
  console.log('Write completed.');
});
