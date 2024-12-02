#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('XX','A')

const expected = undefined;

const process = (data) => {
    var answer = undefined;

    data.forEach(x => {
        console.log('[+]',x)
    })

    return answer
};

require('../common/readInput.js').get('input-test.txt', (data) => {
    layout.test(process(data),expected);
})

//require('../common/readInput.js').get('input.txt', (data) => {
//    layout.answer(process(data))
//})
