#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-09-A')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {

  var lines = []
  var sum = 0

  data.forEach(x => {
    var sp = x.split('')
    for(var y in sp) {
      sp[y] = parseInt(sp[y])
    }
    lines.push(sp)
  })

  for(var y in lines) {
    const ln = lines[y]
    const intY = parseInt(y)
    for(var x in ln) {
      const num = ln[x]
      const intX = parseInt(x)
      var lowest = true 

      if(
        (intX < ln.length && num >= lines[y][intX+1]) || // to the right y'all
        (intX > 0 && num >= lines[y][intX-1]) || // to the left
        (intY > 0 && num >= lines[intY-1][x]) || // to the top
        (intY < lines.length-1 && num >= lines[intY+1][x]) // to the bottom
      ) {
        lowest = false
      }

      if(lowest) {
        sum += num+1
      }

    }
  }

  console.log('')
  console.log('Answer:', sum)
})
