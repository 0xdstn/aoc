#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2022-03-B')
console.log('')

//require('../common/readInput.js').get('input-test.txt', (data) => {
require('../common/readInput.js').get('input.txt', (data) => {

    var answer = 0

    for(let x = 0; x <= data.length-1; x += 3) {
        const elf1 = data[x]
        const elf2 = data[x+1]
        const elf3 = data[x+2]
        let found = false

        elf1.split('').forEach(l => {
            if(elf2.includes(l) && elf3.includes(l) && !found) {
                if(l === l.toUpperCase()) {
                    answer += l.charCodeAt(0)-38
                } else {
                    answer += l.charCodeAt(0)-96
                }
                found = true
            }
        })
    }

    console.log('')
    console.log('[!] Answer:', answer)
})
