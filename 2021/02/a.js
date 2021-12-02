#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-02-A')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {
  let depth = 0
  let pos = 0
  data.forEach(x => {
    const cur = x.split(' ')
    const dir = cur[0]
    const val = parseInt(cur[1])

    if(dir === 'forward') {
      pos += val
    } else if(dir === 'down') {
      depth += val
    } else if(dir === 'up') {
      depth -= val
    }
  })
  console.log('')
  console.log('Answer: ', depth*pos)
})

