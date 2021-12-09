#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-09-B')
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

  rowLen = lines[0].length
  colLen = lines.length

  var used = []
  var basins = []
  var curBasin = 0
  var inBasin = false

  function checkCoord(x,y) {
    const coord = `${x}_${y}`

    if(!used.includes(coord)) {
      used.push(`${x}_${y}`)
      basins[curBasin]++

      // to the right
      if(x < rowLen-1 && lines[y][x+1] !== 9) {
        checkCoord(x+1,y)
      }

      // to the left
      if(x > 0 && lines[y][x-1] !== 9) {
          checkCoord(x-1,y)
      }

      // to the top
      if(y > 0 && lines[y-1][x] !== 9) {
          checkCoord(x,y-1)
      }

      // to the bottom
      if(y < colLen-1 && lines[y+1][x] !== 9) {
          checkCoord(x,y+1)
      }
    }
  }

  for(var y in lines) {
    const ln = lines[y]
    const intY = parseInt(y)
    for(var x in ln) {
      const num = ln[x]
      const intX = parseInt(x)

      if(!used.includes(`${x}_${y}`) && lines[y][x] !== 9) {
        if(basins[curBasin] === undefined) {
          basins[curBasin] = 0
        }
        checkCoord(intX,intY)
        curBasin++
      }
    }
  }

  basins.sort(function(a, b){return b-a})

  const ans = basins[0] * basins[1] * basins[2]

  console.log('')
  console.log('Answer:', ans)
})
