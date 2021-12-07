#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-07-A')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {

  var nums = []
  data[0].split(',').forEach(x => {
    nums.push(parseInt(x))
  })

  var low = Math.min(...nums)
  var high = Math.max(...nums)

  var lowestFuel = 999999
  for(var x = low; x <= high; x++) {
    var curFuel = 0
    nums.forEach(num => {
      if(x < num) {
        curFuel += num-x
      } else if(x > num) {
        curFuel += x-num
      }
    })
    if(curFuel < lowestFuel) {
      lowestFuel = curFuel
    }
  }

  console.log('')
  console.log('Answer:', lowestFuel)
})
