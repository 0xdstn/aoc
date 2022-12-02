#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2022-02-B')
console.log('')

//require('../common/readInput.js').get('input-test.txt', (data) => {
require('../common/readInput.js').get('input.txt', (data) => {
	
    var answer = 0

    // A X ROCK
    // B Y PAPER
    // C Z SCISSORS

    // X LOSE
    // Y DRAW 
    // Z WIN 

    data.forEach(x => {
        const sp = x.split(' ')
        let choice = ''

        if(sp[1] == 'X') {
            if(sp[0] == 'A') { choice = 'Z' }
            else if(sp[0] == 'B') { choice = 'X' }
            else if(sp[0] == 'C') { choice = 'Y' }
        } else if(sp[1] == 'Y') { 
            if(sp[0] == 'A') { choice = 'X' }
            else if(sp[0] == 'B') { choice = 'Y' }
            else if(sp[0] == 'C') { choice = 'Z' }
        } else if(sp[1] == 'Z') { 
            if(sp[0] == 'A') { choice = 'Y' }
            else if(sp[0] == 'B') { choice = 'Z' }
            else if(sp[0] == 'C') { choice = 'X' }
        }

        if(choice == 'X') { answer += 1 }
        else if(choice == 'Y') { answer += 2 }
        else if(choice == 'Z') { answer += 3 }

        if(
            (sp[0] == 'A' && choice == 'Y') ||
            (sp[0] == 'B' && choice == 'Z') ||
            (sp[0] == 'C' && choice == 'X')
        ) {
            answer += 6
        } else if(
            (sp[0] == 'A' && choice == 'X') ||
            (sp[0] == 'B' && choice == 'Y') ||
            (sp[0] == 'C' && choice == 'Z')
        ) {
            answer += 3
        }
    })

    console.log('')
    console.log('[!] Answer:', answer)
})
