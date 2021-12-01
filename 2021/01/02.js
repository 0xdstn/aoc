#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-01-B')
console.log('')

let data = []

let lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
})

lineReader.on('line', function (line) {
  data.push(parseInt(line))
})

lineReader.on('close', function () {
  let windows = []
  const offset = 0
  for(let x = 0; x < data.length; x += 1) {
    let sum = data[x]+data[x+1]+data[x+2]
    if(!isNaN(sum)) {
      windows.push(sum)
    }
  }
  let prev = null
  let inc = 0
  windows.forEach(x => {
    if (prev === null) {
      console.log(`${x} (N/A - no previous measurement)`)
    } else {
      if (x > prev) {
        inc++
        console.log(`${x} (increase)`)
      } else {
        console.log(`${x} (decrease)`)
      }
    }
    prev = x
  })
  console.log('')
  console.log('Answer: ', inc)
})

