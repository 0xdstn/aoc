#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-12-B')
console.log('[!] Not working')
console.log('')

var ends = []

var expected = [
  'start,A,b,A,b,A,c,A,end',
  'start,A,b,A,b,A,end',
  'start,A,b,A,b,end',
  'start,A,b,A,c,A,b,A,end',
  'start,A,b,A,c,A,b,end',
  'start,A,b,A,c,A,c,A,end',
  'start,A,b,A,c,A,end',
  'start,A,b,A,end',
  'start,A,b,d,b,A,c,A,end',
  'start,A,b,d,b,A,end',
  'start,A,b,d,b,end',
  'start,A,b,end',
  'start,A,c,A,b,A,b,A,end',
  'start,A,c,A,b,A,b,end',
  'start,A,c,A,b,A,c,A,end',
  'start,A,c,A,b,A,end',
  'start,A,c,A,b,d,b,A,end',
  'start,A,c,A,b,d,b,end',
  'start,A,c,A,b,end',
  'start,A,c,A,c,A,b,A,end',
  'start,A,c,A,c,A,b,end',
  'start,A,c,A,c,A,end',
  'start,A,c,A,end',
  'start,A,end',
  'start,b,A,b,A,c,A,end',
  'start,b,A,b,A,end',
  'start,b,A,b,end',
  'start,b,A,c,A,b,A,end',
  'start,b,A,c,A,b,end',
  'start,b,A,c,A,c,A,end',
  'start,b,A,c,A,end',
  'start,b,A,end',
  'start,b,d,b,A,c,A,end',
  'start,b,d,b,A,end',
  'start,b,d,b,end',
  'start,b,end'
]

require('../common/readInput.js').get('input-test.txt', (data) => {
	
  function isBig(cave) {
    return cave === cave.toUpperCase()
  }

  function doubleVisited(path) {
    var sp = path.split(',')
    var visited = false
    sp.forEach(x => {
      var regex = new RegExp(','+x, 'g')
      var count = (path.match(regex) || []).length
      if(count > 1) {
        visited = true
      }
    })
    return visited
  }

  var paths = 0
  var active = []
  var avail = []

  data.forEach(x => {
    if(x.startsWith('start-')) {
      active.push(x.replace('-',','))
    } else if(!x.endsWith('-end')){
      var sp = x.split('-')
      avail.push(`${sp[1]}-${sp[0]}`)
      avail.push(x)
    } else {
      avail.push(x)
    }
  })

  console.log(avail)

  while(active.length) {
    var toRemove = []
    var curActive = [...active]

    for(var x in curActive) {
      var next = curActive[x].split(',').pop()
      var options = []
      avail.forEach(i => {
        if(i.startsWith(next+'-')) {
          options.push(i)
        }
      })
      if(options.length > 0) {
        options.forEach(opt => {
          var optNext = opt.split('-')[1]
          if(optNext === 'end') {
            //console.log(curActive[x]+',end')
            ends.push(curActive[x]+',end')
            paths++
          } else {
            var regex = new RegExp(','+optNext, 'g')
            var count = (curActive[x].match(regex) || []).length
            var doub = doubleVisited(curActive[x])
            if(isBig(optNext) || (!doub && count < 2) || (doub && count < 1)) {
              active.push(curActive[x]+','+optNext)
//            } else {
//              console.log('NO')
//              console.log(expected.includes(curActive[x]+','+optNext))
//              console.log(isBig(optNext),(!doub && count < 2),count < 1)
//              console.log(curActive[x]+','+optNext)
            }
          }
        })
      }
      toRemove.push(x)
    }
    toRemove.reverse().forEach(x => {
      active.splice(x,1)
    })
  }

  //console.log('UHOH')
  expected.forEach(x => {
    if(!ends.includes(x)) {
      //console.log(x)
    }
  })
  
  console.log('')
  console.log('Answer:', paths)
})
