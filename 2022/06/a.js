#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2022-06-A')
console.log('')

//require('../common/readInput.js').get('input-test.txt', (data) => {
require('../common/readInput.js').get('input.txt', (data) => {

    var answer
    const lastThree = []
    let count = 0

    data[0].split('').forEach(x => {
        count++
        if(lastThree.length < 3) {
            lastThree.push(x)
        } else if(
            answer === undefined &&
            !lastThree.includes(x) &&
            lastThree[0] != lastThree[1] &&
            lastThree[1] != lastThree[2] &&
            lastThree[2] != lastThree[0]
        ) {
            answer = count
        } else {
            lastThree.push(x)
            lastThree.shift()
        }
    })

    console.log('')
    console.log('[!] Answer:', answer)
})
