#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2022-06-B')
console.log('')

//require('../common/readInput.js').get('input-test.txt', (data) => {
require('../common/readInput.js').get('input.txt', (data) => {

    var answer
    const last = []
    let count = 0

    function isStartOfMsg(cur) {
        let checked = []
        let isValid = true
        let tmp = [...last]
        tmp.push(cur)

        last.forEach(y => {
            if(checked.includes(y)) {
                isValid = false
            } else {
                checked.push(y)
            }
        })

        return isValid
    }

    data[0].split('').forEach(x => {
        if(last.length < 14) {
            last.push(x)
        } else if(
            answer === undefined &&
            isStartOfMsg(x)
        ) {
            answer = count
        } else {
            last.push(x)
            last.shift()
        }
        count++
    })

    console.log('')
    console.log('[!] Answer:', answer)
})
