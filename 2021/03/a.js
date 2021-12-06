#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-03-A')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {
  let ones = [0,0,0,0,0,0,0,0,0,0,0,0]
  let zeros = [0,0,0,0,0,0,0,0,0,0,0,0]
  
  data.forEach(x => {
    for(let y in x) {
      if(x[y] == '1') {
        ones[y]++
      } else {
        zeros[y]++
      }
    }
  })

  let gammaBinary = ''
  let epsilonBinary = ''

  for(let z in ones) {
    if(ones[z] > zeros[z]) {
      gammaBinary += '1'
      epsilonBinary += '0'
    } else {
      gammaBinary += '0'
      epsilonBinary += '1'
    }
  }

  let gamma = parseInt(gammaBinary,2)
  let epsilon = parseInt(epsilonBinary,2)

  console.log('')
  console.log('Answer:', gamma*epsilon)
})

