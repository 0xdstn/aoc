#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-01-B')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {
  for(let x in data) {
    data[x] = parseInt(data[x])
  }
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
      } else if (x < prev) {
        console.log(`${x} (decrease)`)
      } else {
        console.log(`${x} (no change)`)
      }
    }
    prev = x
  })
  console.log('')
  console.log('Answer: ', inc)
})

