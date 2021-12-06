#!/usr/bin/env node

console.log('')
console.log('[*] AoC 2021-04-B')
console.log('')

require('../common/readInput.js').get('input.txt', (data) => {
  nums = data[0].split(',')

  data.splice(0,2)

  boards = []
  boardCols = []
  boardRows = []
  boardNums = []
  boardIndex = 0
  boardCount = 1
  winners = []
  data.forEach(x => {
    if(x == '') {
      boardIndex++
      boardCount++
    } else {
      if(boards[boardIndex] === undefined) {
        boards[boardIndex] = []
        boardCols[boardIndex] = [0,0,0,0,0]
        boardRows[boardIndex] = [0,0,0,0,0]
        boardNums[boardIndex] = []
      }
      row = x.replace(/  /g," ").trim().split(' ')
      for(var y in row) {
        var num = parseInt(row[y])
        row[y] = num
        boardNums[boardIndex].push(num)
      }
      boards[boardIndex].push(row)
    }
  })

  nums.forEach(num => {
    const n = parseInt(num)
    for(var x in boards) {
      for(var y in boards[x]) {
        if(boards[x][y].includes(n)) {
          var i = boards[x][y].indexOf(n)
          boardCols[x][i]++
          boardRows[x][y]++
          boardNums[x].splice(boardNums[x].indexOf(n),1)
          boardCols[x].forEach(z => {
            if(z === 5) {
              winner(x,num)
            }
          })
          boardRows[x].forEach(z => {
            if(z === 5) {
              winner(x,num)
            }
          })
        }
      }
    }
  })

  function winner(boardIndex,num) {
    if(!winners.includes(boardIndex)) {
      winners.push(boardIndex)
      if(winners.length === boardCount) {
        var sum = 0
        boardNums[boardIndex].forEach(n => {
          sum += n
        })

        console.log('')
        console.log('Answer: ', sum*num)
      }
    }
  }
})
