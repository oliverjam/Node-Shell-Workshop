#!/usr/bin/env node
const fs = require('fs');

const flag = process.argv[2];
const extension = `.${process.argv[3]}`;

fs.readdir(process.cwd(), (err, res) => {
  if (err) {
    throw err;
  } else if (flag === '-ex') {
    const filtered = res.filter((filename) => {
    return filename.includes(extension);
    });
    process.stdout.write(filtered.join('\n'));
  } else {
    process.stdout.write(res.join('\n'));
  }
})
