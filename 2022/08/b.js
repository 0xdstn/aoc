#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2022-08-B')
console.log('')

//require('../common/readInput.js').get('input-test.txt', (data) => {
require('../common/readInput.js').get('input.txt', (data) => {

    var answer = 0
    var x = 0
    var y = 0

    var colLen = data[0].length
    var rowLen = data.length

    data.forEach(ln => {
        x = 0
        ln.split('').forEach(t => {
            let tree = parseInt(t)

            // Trees above
            let visibleAbove = 0
            let aboveBlocked = false
            if(y != 0) {
                for(var yy = y-1; yy >= 0; yy--) {
                    if(!aboveBlocked) {
                        if(parseInt(data[yy][x]) >= tree) {
                            aboveBlocked = true
                        }
                        visibleAbove++
                    }
                }
            }
            // Trees below
            let visibleBelow = 0
            let belowBlocked = false
            if(y != rowLen-1) {
                for(var yy = y+1; yy <= rowLen-1; yy++) {
                    if(!belowBlocked) {
                        if(parseInt(data[yy][x]) >= tree) {
                            belowBlocked = true
                        }
                        visibleBelow++
                    }
                }
            }
            // Trees to left 
            let visibleLeft = 0
            let leftBlocked = false
            if(x != 0) {
                for(var xx = x-1; xx >= 0; xx--) {
                    if(!leftBlocked) {
                        if(parseInt(data[y][xx]) >= tree) {
                            leftBlocked = true
                        }
                        visibleLeft++
                    }
                }
            }
            // Trees to right 
            let visibleRight = 0
            let rightBlocked = false
            if(x != colLen-1) {
                for(var xx = x+1; xx <= colLen-1; xx++) {
                    if(!rightBlocked) {
                        if(parseInt(data[y][xx]) >= tree) {
                            rightBlocked = true
                        }
                        visibleRight++
                    }
                }
            }

            let visible = visibleAbove * visibleBelow * visibleLeft * visibleRight

            if(visible > answer) {
                answer = visible
            }
            x++
        })
        y++
    })

    console.log('')
    console.log('[!] Answer:', answer)
})
