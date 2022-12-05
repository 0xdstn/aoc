#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2022-05-B')
console.log('')

//require('../common/readInput.js').get('input-test.txt', (data) => {
require('../common/readInput.js').get('input.txt', (data) => {

    var answer = ''
    let stacks = []

    data.forEach(x => {
        if(x.includes('[')) { // Initial stacks
            let letters = x.replace(/\]/g,',').replace(/[\[ ]/g,'')
                letters = letters.substr(0,letters.length-1).split(',')
            let found = 0
            let cur = 0
            while(found < letters.length) {
                if(stacks[cur/4] === undefined) {
                   stacks.push([]) 
                }
                if(x[cur] == '[') {
                    stacks[cur/4].unshift(letters[found])
                    found++
                }
                cur += 4
            }
        } else if(x.startsWith('move')) { // Commands
            let inst = x.replace('move ','').replace(' from ',',').replace(' to ',',').split(',').map(y => parseInt(y))
            for(let y = stacks[inst[1]-1].length - 1 - inst[0]; y <= stacks[inst[1]-1].length -2; y++) {
                const item = stacks[inst[1]-1][y+1]
                stacks[inst[2]-1].push(item)
            }
            for(let y = 0; y <= inst[0]-1; y++) {
                stacks[inst[1]-1].pop()
            }
        }
    })

    stacks.forEach(s => {
        answer += s.pop()
    })

    console.log('')
    console.log('[!] Answer:', answer)
})
