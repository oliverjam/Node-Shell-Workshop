const fs = require('fs');

const file = process.argv[2];
const redirect = process.argv[3];
const targetFile = process.argv[4];

const readStream = fs.createReadStream(file, 'UTF8');

if (redirect === '>>') {
  const writeStream = fs.createWriteStream(targetFile, {'flags': 'a'});
  readStream.pipe(writeStream);
  writeStream.on('finish', function() {
    console.log('Appended to file');
  })
} else {
  let fileContent = '';
  readStream.on('error', function(err) {
    console.log(err);
  });
  readStream.on('data', function(chunk) {
    fileContent += chunk;
  });
  readStream.on('end', function() {
    console.log(fileContent);
  });
}
