#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-05-B')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {

  counts = {}

  function addCoord(x,y) {
    if(counts[`${x}_${y}`] === undefined) {
      counts[`${x}_${y}`] = 1
    } else {
      counts[`${x}_${y}`]++
    }
  }

  data.forEach(x => {
    var coords = x.split(' -> ')
    var coord1 = coords[0].split(',')
    var coord2 = coords[1].split(',')
    var c1x = parseInt(coord1[0])
    var c1y = parseInt(coord1[1])
    var c2x = parseInt(coord2[0])
    var c2y = parseInt(coord2[1])

    if(c1x === c2x) {
      // Vertical
      if( c1y < c2y) {
        for(var z = c1y; z <= c2y; z++) {
          addCoord(c1x,z)
        }
      } else {
        for(var z = c1y; z >= c2y; z--) {
          addCoord(c1x,z)
        }
      }
    } else if(c1y === c2y) {
      // Horizontal
      if( c1x < c2x) {
        for(var z = c1x; z <= c2x; z++) {
          addCoord(z,c1y)
        }
      } else {
        for(var z = c1x; z >= c2x; z--) {
          addCoord(z,c1y)
        }
      }
    } else {
      // Diagonal
      if( c1x < c2x) {
        if(c1y < c2y) {
          var curY = c1y
        } else {
          var curY = c1y
        }
        for(var z = c1x; z <= c2x; z++) {
          addCoord(z,curY)
          if(c1y < c2y) {
            curY++
          } else {
            curY--
          }
        }
      } else {
        if(c1y > c2y) {
          var curY = c1y
        } else if(c1y < c2y) {
          var curY = c1y
        }
        for(var z = c1x; z >= c2x; z--) {
          addCoord(z,curY)
          if(c1y > c2y) {
            curY--
          } else if(c1y < c2y) {
            curY++
          }
        }
      }
    }
  })

  var points = 0
  for(var x in counts) {
    if(counts[x] >= 2) {
      points++
    }
  }
  console.log('')
  console.log('Answer: ', points)
})
