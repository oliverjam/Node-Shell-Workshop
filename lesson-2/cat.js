const fs = require('fs');

const file = process.argv[2];

let fileContent = '';

const readStream = fs.createReadStream(file, 'UTF8');

readStream.on('error', function(err) {
  console.log(err);
})

readStream.on('data', function(chunk) {
  fileContent += chunk;
})

readStream.on('end', function() {
  console.log(fileContent);
})
