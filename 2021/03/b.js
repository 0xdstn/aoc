#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-03-B')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {
  
  origData = [...data]

  index = 0
  indexMax = data[0].length
  while(data.length > 1 && index < indexMax) {
    let ones = 0
    let zeros = 0

    data.forEach(x => {
      if(x[index] == '1') {
        ones++
      } else {
        zeros++
      }
    })

    let val = ''

    if(ones > zeros) {
      val = '1'
    }
    else if(ones < zeros) {
      val = '0'
    } else {
      val = '1'
    }

    for(let y = data.length-1; y >= 0; y--) {
      if(data[y][index] !== val) {
        data.splice(y, 1)
      }
    }
    index++
  }

  oxy = parseInt(data[0], 2)

  data = [...origData]

  index = 0
  indexMax = data[0].length
  while(data.length > 1 && index < indexMax) {
    let ones = 0
    let zeros = 0

    data.forEach(x => {
      if(x[index] == '1') {
        ones++
      } else {
        zeros++
      }
    })

    let val = ''

    if(ones > zeros) {
      val = '0'
    }
    else if(ones < zeros) {
      val = '1'
    } else {
      val = '0'
    }

    for(let y = data.length-1; y >= 0; y--) {
      if(data[y][index] !== val) {
        data.splice(y, 1)
      }
    }
    index++
  }

  co2 = parseInt(data[0], 2)

  console.log('')
  console.log('Answer:', oxy*co2)
})

