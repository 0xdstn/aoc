#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-01-A')
console.log('')

let lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
})

let prev = null
let inc = 0
lineReader.on('line', function (line) {
	if (prev === null) {
    console.log(`${line} (N/A - no previous measurement)`)
  } else {
    cur = parseInt(line)
    if (cur > prev) {
      inc++
      console.log(`${line} (increase)`)
    } else {
      console.log(`${line} (decrease)`)
    }
  }
  prev = parseInt(line)
})

lineReader.on('close', function () {
  console.log('')
  console.log('Answer: ', inc)
})

