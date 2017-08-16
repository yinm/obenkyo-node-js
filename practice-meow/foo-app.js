#!/usr/bin/env node
'use strict';
const meow = require('meow');

const cli = meow(`
	Usage
	  $ foo <input>

	Options
	  --rainbow, -r  Include a rainbow

	Examples
	  $ foo unicorns --rainbow
	  🌈 unicorns 🌈
`, {
	alias: {
		r: 'rainbow'
	}
});
/*
{
	input: ['unicorns'],
	flags: {rainbow: true},
	...
}
*/

function foo(a, b) {
	console.log(a);
	console.log(b);
}

foo(cli.input[0], cli.flags);