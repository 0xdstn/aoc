#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-07-B')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {

  var nums = []
  data[0].split(',').forEach(x => {
    nums.push(parseInt(x))
  })

  var low = Math.min(...nums)
  var high = Math.max(...nums)

  var lowestFuel = 9999999999999999
  for(var x = low; x <= high; x++) {
    var curFuel = 0
    nums.forEach(num => {
      if(x < num) {
        var curInc = 0
        for(var y = x; y<=num; y++) {
          curFuel += curInc
          curInc++
        }
      } else if(x > num) {
        var curInc = 0
        for(var y = num; y<=x; y++) {
          curFuel += curInc
          curInc++
        }
      }
    })
    if(curFuel < lowestFuel) {
      lowestFuel = curFuel
    }
  }

  console.log('')
  console.log('Answer:', lowestFuel)
})
