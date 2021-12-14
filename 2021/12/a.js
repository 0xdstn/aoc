#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-12-A')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {
	
  function isBig(cave) {
    return cave === cave.toUpperCase()
  }

  var paths = 0
  var active = []

  data.filter(i => {return !i.startsWith('start-') && !i.endsWith('-end')}).forEach(path => {
    var sp = path.split('-')
    data.push(`${sp[1]}-${sp[0]}`)
  })

  data.filter(i => {return i.startsWith('start-')}).forEach(start => {
    active.push('start,'+start.split('-')[1])
  })

  for(var x in data) {
    if(data[x].indexOf('start') !== -1) {
      data.splice(x,1)
    }
  }

  while(active.length) {
    var toRemove = []
    var curActive = [...active]

    for(var x in curActive) {
      var next = curActive[x].split(',').pop()
      var options = data.filter(i => {return i.startsWith(next+'-')})
      if(options.length > 0) {
        options.forEach(opt => {
          var optNext = opt.split('-')[1]
          if(optNext === 'end') {
            paths++
          } else {
            if(isBig(optNext) || curActive[x].indexOf(','+optNext) === -1) {
              active.push(curActive[x]+','+optNext)
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
  
  console.log('')
  console.log('Answer:', paths)
})
