#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-06-A')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {
  var d = data[0].split(',')
  var fish = []
  data[0].split(',').forEach(x => {
    fish.push(parseInt(x))
  })

  var day = 1
  //console.log('Initial State: ',fish)
  while(day < 81) {
    for(var x in fish) {
      if(fish[x] === 0) {
        fish[x] = 6
        fish.push(8)
      } else {
        fish[x]--
      }
    }
    //console.log('After',day,'day(s)',fish)
    day++
  }

  console.log('')
  console.log('Answer:', fish.length)
})
