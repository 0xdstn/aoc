#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('XX','A')

require('../common/readInput.js').get('input-test.txt', (data) => {
//require('../common/readInput.js').get('input.txt', (data) => {

    var answer

    data.forEach(x => {
        console.log('[+]',x)
    })

    layout.answer(answer)
})
