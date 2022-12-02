#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2022-02-A')
console.log('')

//require('../common/readInput.js').get('input-test.txt', (data) => {
require('../common/readInput.js').get('input.txt', (data) => {

    var answer = 0

    // A X ROCK
    // B Y PAPER
    // C Z SCISSORS

    data.forEach(x => {
        const sp = x.split(' ')

        if(sp[1] == 'X') { answer += 1 }
        else if(sp[1] == 'Y') { answer += 2 }
        else if(sp[1] == 'Z') { answer += 3 }

        if(
            (sp[0] === 'A' && sp[1] == 'Y') ||
            (sp[0] === 'B' && sp[1] == 'Z') ||
            (sp[0] === 'C' && sp[1] == 'X')
        ) {
            answer += 6
        } else if(
            (sp[0] === 'A' && sp[1] == 'X') ||
            (sp[0] === 'B' && sp[1] == 'Y') ||
            (sp[0] === 'C' && sp[1] == 'Z')
        ) {
            answer += 3
        }
    })

    console.log('')
    console.log('[!] Answer:', answer)
})
