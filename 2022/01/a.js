#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2022-01-A')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {

    var answer = 0
    var cur = 0

    data.forEach(x => {
        if(x == '') {
            if(answer < cur) answer = cur
            cur = 0
        } else {
            cur += parseInt(x)
        }
    })

    if(answer < cur) answer = cur

    console.log('')
    console.log('Answer:', answer)
})
