#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-06-B')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {
  var counts = [0,0,0,0,0,0,0,0,0]

  data[0].split(',').forEach(x => {
    counts[parseInt(x)]++
  })


  var day = 1
  while(day < 257) {
    var tmp = [...counts]
    counts = [
      tmp[1], // 1 -> 0
      tmp[2], // 2 -> 1
      tmp[3], // 3 -> 2
      tmp[4], // 4 -> 3
      tmp[5], // 5 -> 4
      tmp[6], // 6 -> 5
      tmp[7] + tmp[0], // 7+0 -> 6
      tmp[8], // 8 -> 7
      tmp[0] // 0 -> 8 
    ]
    day++
  }
  

  var total = 0
  counts.forEach(x => {
    total += x
  })

  console.log('')
  console.log('Answer: ', BigInt(total).toString())
})
