#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2022-XX-B')
console.log('')

require('../common/readInput.js').get('input-test.txt', (data) => {
//require('../common/readInput.js').get('input.txt', (data) => {

    var answer

    data.forEach(x => {
        console.log('[+]',x)
    })

    console.log('')
    console.log('[!] Answer:', answer)
})
