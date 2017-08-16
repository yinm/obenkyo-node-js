#!/usr/bin/env node

const args = process.argv.slice(2);

function sum(args) {
  return args.reduce((sum, v) => {
    return sum + Number(v);
  }, 0);
}

console.log(sum(args));