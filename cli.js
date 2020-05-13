#!/usr/bin/env node
const gen = require('./index');

(async () => {
  const result = await gen(process.argv[2]);
  console.log(`${result}`);
})();
