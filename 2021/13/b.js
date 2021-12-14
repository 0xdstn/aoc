#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-13-B')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {

  function printPaper() {
    paper.forEach(row => {
      console.log(row.join(''))
    })
  }
	
  var points = []
  var highestX = 0
  var highestY = 0
  var instructions = []
  var paper = []

  data.forEach(ln => {
    if(ln.indexOf('fold') !== -1) {
      var sp = ln.split(' ')
      var sp2 = sp[2].split('=')
      instructions.push([sp2[0],parseInt(sp2[1])])
    } else if( ln !== '') {
      var sp = ln.split(',')
      var x = parseInt(sp[0])
      var y = parseInt(sp[1])
      points.push([x,y])
      if( x > highestX) {
        highestX = x
      }
      if( y > highestY) {
        highestY = y
      }
    }
  })

  for(var y = 0; y <= highestY; y++) {
    paper.push(new Array(highestX+1).fill('.'))
  }

  points.forEach(pt => {
    paper[pt[1]][pt[0]] = '#'
  })

  instructions.forEach(inst => {
    if(inst[0] === 'y') {
      for(var y in paper) {
        for(var x in paper[y]) {
          if(y > inst[1]) {
            if( paper[y][x] === '#') {
              paper[inst[1]-(y-inst[1])][x] = '#'
            }
          }
        }
      }
      paper.splice(inst[1],paper.length-inst[1]+1)
    } else {
      for(var y in paper) {
        for(var x in paper[y]) {
          if( paper[y][x] === '#') {
            paper[y][inst[1]-(x-inst[1])] = '#'
          }
        }
        paper[y].splice(inst[1],paper[y].length-inst[1]+1)
      }
    }

  })

  printPaper()

  console.log('')
  console.log('Answer:', 'CJHAZHKU') 
})

