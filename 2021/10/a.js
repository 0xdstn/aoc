#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-10-A')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {
	
  const scoring = {
		')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137
	}

  var points = 0

  const openings = ['(','[','{','<']
  const closings = [')',']','}','>']

  data.forEach(line => {
    var stack = []
    var found = false
    for(var x in line) {
      if(!found) {
        const ch = line[x]
        const expected = closings[openings.indexOf(stack[stack.length-1])]

        if(openings.includes(ch)) {
          stack.push(ch)
        } else if(ch !== expected) {
          points += scoring[ch]
          found = true
        } else {
          stack.pop()
        }
      }
    }
  })

  console.log('')
  console.log('Answer:', points)
})
