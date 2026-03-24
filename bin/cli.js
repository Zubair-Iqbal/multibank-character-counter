#!/usr/bin/env node

const { countCharacters, formatOutput } = require('../src/counter');

function readStdin() {
  return new Promise((resolve) => {
    let data = '';
    process.stdin.setEncoding('utf8');

    process.stdin.on('data', chunk => data += chunk);
    process.stdin.on('end', () => resolve(data));
  });
}

async function main() {
  let input = process.argv[2];

  if (!input) {
    input = await readStdin();
  }

  const result = countCharacters(input);

  if (!result) {
    console.error('Error: Input is empty or whitespace only.');
    process.exit(1);
  }

  console.log(formatOutput(result));
}

main();