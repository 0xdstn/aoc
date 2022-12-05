#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2022-03-A')
console.log('')

//require('../common/readInput.js').get('input-test.txt', (data) => {
require('../common/readInput.js').get('input.txt', (data) => {

    var answer = 0

    data.forEach(x => {
        const len = x.length
        const ruck1 = x.substr(0,len/2)
        const ruck2 = x.substr(len/2,len)
        let found = false

        ruck1.split('').forEach(l => {
            if(ruck2.includes(l) && !found) {
                if(l === l.toUpperCase()) {
                    answer += l.charCodeAt(0)-38
                } else {
                    answer += l.charCodeAt(0)-96
                }
                found = true
            }
        })
    })

    console.log('')
    console.log('[!] Answer:', answer)
})
