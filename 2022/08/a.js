#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2022-08-A')
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
            // Outer perimeter
            if(
                (y == 0) ||         // In the first row
                (y == rowLen-1) ||  // In the last row                    
                (x == 0) ||         // First item in a row                
                (x == colLen-1)     // Last item in a row
            ) {
                answer++
            } else {
                // Trees above
                let visibleAbove = true
                for(var yy = 0; yy < y; yy++) {
                    if(data[yy][x] >= t) {
                        visibleAbove = false                        
                    }
                }
                // Trees below
                let visibleBelow = true
                for(var yy = y+1; yy <= rowLen-1; yy++) {
                    if(data[yy][x] >= t) {
                        visibleBelow = false                        
                    }
                }
                // Trees to left 
                let visibleLeft = true
                for(var xx = 0; xx < x; xx++) {
                    if(data[y][xx] >= t) {
                        visibleLeft = false                        
                    }
                }
                // Trees to right 
                let visibleRight = true
                for(var xx = x+1; xx <= colLen-1; xx++) {
                    if(data[y][xx] >= t) {
                        visibleRight = false                        
                    }
                }

                if(visibleLeft || visibleRight || visibleAbove || visibleBelow) {
                    answer++
                }
            }
            x++
        })
        y++
    })

    console.log('')
    console.log('[!] Answer:', answer)
})
