#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-08-A')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {

  const matches = [2,4,3,7] // 1,4,7,8

  var count = 0

  data.forEach(x => {
    var sp = x.split(' | ')
    var nums = sp[1].split(' ')
    nums.forEach(num => {
      if(matches.includes(num.length)) {
        count++
      }
    })
  })

  console.log('')
  console.log('Answer:', count)
})
