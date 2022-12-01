#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2022-01-B')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {

    var answer = 0
    var cur = 0
    var totals = []

    data.forEach(x => {
        if(x == '') {
            if(answer < cur) totals.push(cur)
            cur = 0
        } else {
            cur += parseInt(x)
        }
    })

    totals.push(cur)

    totals.sort((a, b) => {
          return b-a
    })

    answer = totals[0] + totals[1] + totals[2]

    console.log('')
    console.log('Answer:', answer)
})
