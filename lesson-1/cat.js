#!/usr/bin/env node
const fs = require('fs');

const file = process.argv[2];

fs.readFile(file, 'utf8', (err, res) => {
  if (err) throw err;
  process.stdout.write(res);
})
