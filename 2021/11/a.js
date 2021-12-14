#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-11-A')
console.log('[!] Not working')
console.log('')

require('../common/readInput.js').get('input-test2.txt', (data) => {
	
  var lines = []
  var flashed = []
  var sum = 0

  data.forEach(x => {
    var sp = x.split('')
    for(var y in sp) {
      sp[y] = parseInt(sp[y])
    }
    lines.push(sp)
  })

  const numRows = lines.length
  const numCols = lines[0].length

  function checkCoord(strX,strY,initX,initY) {
    const x = parseInt(strX)
    const y = parseInt(strY)

    flashed.push(`${strX}_${strY}`)

    console.log('CHECK',x,y,initX,initY)

    var toRun = []

    if(y > 0) {
      if(y-1 !== initY || x !== initX) {
        console.log('[+] TOP',y-1,x)
        lines[y-1][x]++ // top
        if(lines[y-1][x] === 10) {
          toRun.push([y-1,x])
        }
      }
      if(x > 0) {
        console.log(y-1 !== initY,x-1 !== initX);
        if(y-1 !== initY || x-1 !== initX) {
          console.log('[+] TPL',y-1,x-1,)
          lines[y-1][x-1] // top left
          if(lines[y-1][x-1] === 10) {
            toRun.push([y-1,x-1])
          }
        }
      }
      if(x < numCols-1) {
        if(y-1 !== initY || x+1 !== initX) {
          console.log('[+] TPR',y-1,x+1)
          lines[y-1][x+1] // top right
          if(lines[y-1][x+1] === 10) {
            toRun.push([y-1,x+1])
          }
        }
      }
    }
    if(x > 0) {
      if(y !== initY || x-1 !== initX) {
        console.log('[+] LEF',y,x-1)
        lines[y][x-1]++ // left
        if(lines[y][x-1] === 10) {
          toRun.push([y,x-1])
        }
      }
    }
    if(x < numCols-1) {
      if(y !== initY || x+1 !== initX) {
        console.log('[+] RIG',y,x+1)
        lines[y][x+1]++ // right
        if(lines[y][x+1] === 10) {
          toRun.push([y,x+1])
        }
      }
    }
    if(y < numRows-1) {
      if(y+1 !== initY || x !== initX) {
        console.log('[+] BOT',y+1,x)
        lines[y+1][x]++ // bottom
        if(lines[y+1][x] === 10) {
          toRun.push([y+1,x])
        }
      }
      if(x > 0) {
        if(y+1 !== initY || x-1 !== initX) {
          console.log('[+] BTL',y+1,x-1)
          lines[y+1][x-1] // bottom left
          if(lines[y+1][x-1] === 10) {
            toRun.push([y+1,x-1])
          }
        }
      }
      if(x < numCols-1) {
        if(y+1 !== initY || x+1 !== initX) {
          console.log('[+] BTR',y+1,x+1)
          lines[y+1][x+1] // bottom right
          if(lines[y+1][x+1] > 9) {
            toRun.push([y+1,x+1])
          }
        }
      }
    }

    //console.log(toRun)
    toRun.forEach(coord => {
      if(!flashed.includes(`${coord[1]}_${coord[0]}`)) {
        checkCoord(coord[1],coord[0],x,y)
      }
    });
  }

  console.log(lines)

  for(var step = 1; step <= 2; step++) {
    console.log('STEP',step)
    flashed = []

    // Increase all by 1
    for(var lx in lines) {
      for(var ly in lines[lx]) {
        lines[ly][lx]++
      }
    }

    for(var lx in lines) {
      for(var ly in lines[lx]) {
        if(lines[ly][lx] > 9) {
          checkCoord(lx,ly,-1,-1)
        }
        //else { console.log(lines[ly][lx],lx,ly) }
      }
    }

    for(var lx in lines) {
      for(var ly in lines[lx]) {
        if(lines[ly][lx] > 9) {
          lines[ly][lx] = 0
        }
      }
    }
    console.log(lines)
  }

  console.log('')
  console.log('Answer:', '🐙')
})
