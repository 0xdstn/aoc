#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2022-04-A')
console.log('')

//require('../common/readInput.js').get('input-test.txt', (data) => {
require('../common/readInput.js').get('input.txt', (data) => {

    var answer = 0

    data.forEach(x => {
        const sp = x.replace(',','-').split('-').map(y => parseInt(y))
        if(
            (sp[0] <= sp[2] && sp[1] >= sp[3]) ||
            (sp[2] <= sp[0] && sp[3] >= sp[1])
        ) {
            answer++
        }
    })

    console.log('')
    console.log('[!] Answer:', answer)
})
