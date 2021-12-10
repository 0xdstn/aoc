#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-10-B')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {
	
  const scoring = {
		')': 1,
    ']': 2,
    '}': 3,
    '>': 4
	}

  const openings = ['(','[','{','<']
  const closings = [')',']','}','>']

  const scores = []

  data.forEach(line => {
    var stack = []
    var corrupt = false

    for(var x in line) {
      const ch = line[x]
      const expected = closings[openings.indexOf(stack[stack.length-1])]

      if(openings.includes(ch)) {
        stack.push(ch)
      } else if(ch !== expected) {
        corrupt = true
      } else {
        stack.pop()
      }

    }

    if(!corrupt) {
      var linePoints = 0
      stack.reverse().forEach(x => {
        linePoints = (linePoints*5)+scoring[closings[openings.indexOf(x)]]
      })
      scores.push(linePoints)
    }
  })

  const sorted = scores.sort(function(a,b){return a-b})
  var ans = sorted[Math.floor(scores.length/2)]

  console.log('')
  console.log('Answer:', ans)
})
