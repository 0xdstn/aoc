#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2022-07-B')
console.log('')

//require('../common/readInput.js').get('input-test.txt', (data) => {
require('../common/readInput.js').get('input.txt', (data) => {

    var answer = 0
    var curDir = ''
    var dirs = ['/']
    var totals = [0]
    var parents = []

    const systemSpace = 70000000
    const updateSpace = 30000000

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

    neededSpace = updateSpace - (systemSpace - totals[0])

    answer = updateSpace 

    totals.forEach((t,i) => {
        if(t >= neededSpace) {
            if(t < answer) {
                answer = t
            }
        }
    })

    console.log('')
    console.log('[!] Answer:', answer)
})
