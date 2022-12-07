#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2022-07-A')
console.log('')

//require('../common/readInput.js').get('input-test.txt', (data) => {
require('../common/readInput.js').get('input.txt', (data) => {

    var answer = 0
    var curDir = ''
    var dirs = []
    var totals = []
    var parents = []

    function formatDir(dir) {
        return curDir + dir
    }

    data.forEach(x => {
        if(x.startsWith('$ cd')) {
            if(x.includes('..')) {
                curDir = parents[parents.length-1]
                parents.pop()
            } else {
                if(curDir != '') {
                    parents.push(curDir)
                }
                curDir = formatDir(x.replace('$ cd ',''))
            }
        } else if(x.startsWith('dir')) {
            const listedDir = formatDir(x.split(' ')[1])
            dirs.push(listedDir)
            totals.push(0)
        } else if(!x.startsWith('$')) {
            const fileSize = parseInt(x.split(' ')[0])
            totals[dirs.indexOf(curDir)] += fileSize
            parents.forEach(p => {
                totals[dirs.indexOf(p)] += fileSize
            })
        }
    })

    totals.forEach((t,i) => {
        if(t <= 100000) {
            answer += t
        }
    })

    console.log('')
    console.log('[!] Answer:', answer)
})
