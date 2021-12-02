#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-02-B')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {
  let depth = 0
  let pos = 0
  let aim = 0
  data.forEach(x => {
    const cur = x.split(' ')
    const dir = cur[0]
    const val = parseInt(cur[1])

    if(dir === 'forward') {
      pos += val
      depth += (aim*val)
    } else if(dir === 'down') {
      aim += val
    } else if(dir === 'up') {
      aim -= val
    }
  })
  console.log('')
  console.log('Answer: ', depth*pos)
})

