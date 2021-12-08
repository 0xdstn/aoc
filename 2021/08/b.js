#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-08-B')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {

  function alpha(str) {
    return str.split('').sort().join('')
  }

  const one = 2
  const four = 4
  const seven = 3
  const eight = 7
  const letters = ['a','b','c','d','e','f','g']

  var total = 0

  data.forEach(x => {
    var sp = x.split(' | ')
    var signal = sp[0].split(' ')
    var outputs = sp[1].split(' ')

    var known = {}
    var finalKey = {}

    signal.forEach(num => {
      switch(num.length) {
        case one:
        	known[1] = num
          finalKey[alpha(num)] = '1'
          break
        case four:
        	known[4] = num
          finalKey[alpha(num)] = '4'
          break
        case seven:
        	known[7] = num
          finalKey[alpha(num)] = '7'
          break
        case eight:
        	known[8] = num
          finalKey[alpha(num)] = '8'
          break
      }
    })

    var key = {
      a: null,
      b: null,
      c: null,
      d: null,
      e: null,
      f: null,
      g: null
    }
      
		/*
    f : 0,1,3,4,5,6,7,8,9 - 2
    c : 0,1,2,3,4,7,8,9 - 5,6
    a : 0,2,3,5,6,7,8,9 - 1,4
    g : 0,2,3,5,6,8,9 - 1,4,7
    d : 2,3,4,5,6,7,9 - 0,1,7
    b : 0,4,5,6,8,9 - 1,2,3,7
    e : 0,2,6,8 - 1,3,4,5,7,9
		*/

    letters.forEach(l => {
      var count = 0
      signal.forEach(s => {
        if(s.indexOf(l) !== -1) {
          count++
        }
      })

      if(count === 9) {
        key['f'] = l
      }
      else if(count === 8) { 
        if(
          known[4].indexOf(l) === -1 && 
          known[1].indexOf(l) === -1 
        ) {
          key['a'] = l
        } else {
          key['c'] = l
        }
      } else if(count === 7) {
        if(known[4].indexOf(l) === -1) {
          key['g'] = l
        } else {
          key['d'] = l
        }
      } else if(count === 6) {
        key['b'] = l
      } else if(count === 4) {
        key['e'] = l
      }
    })

    signal.forEach(sig => {
      var s = alpha(sig)
      if(s.length === 6) { // 9,6,0
        if(s.indexOf(key['e']) === -1) {
          finalKey[s] = '9'
        } else if(s.indexOf(key['c']) === -1) {
          finalKey[s] = '6'
        } else {
          finalKey[s] = '0'
        }
      } else if(s.length === 5) { // 5,2,3
        if(s.indexOf(key['c']) === -1) {
          finalKey[s] = '5'
        } else if(s.indexOf(key['f']) === -1) {
          finalKey[s] = '2'
        } else {
          finalKey[s] = '3'
        }
      }
    })

    var out = ''
    outputs.forEach(o => {
      out += finalKey[alpha(o)]
    })
    total += parseInt(out)
  })

  console.log('')
  console.log('Answer:', total)
})
