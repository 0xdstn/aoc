#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('06','B')

const expected = 71503;

const process = (data) => {
    var answer = 0;

    let t = Number(data[0].substr(11).trim().replace(/\s+/g,''));
    let d = Number(data[1].substr(11).trim().replace(/\s+/g,''));

    console.log('TIME',t);
    console.log('DIST',d);

    let c = 0;
    for(let y = 1; y < t; y++) {
        if((y*(t-y)) > d) {
            c++;
        }
    }
    if(answer === 0) {
        answer = c;
    } else {
        answer = answer*c;
    }

    return answer
};

require('../common/readInput.js').get('input-test.txt', (data) => {
    layout.test(process(data),expected);
})

require('../common/readInput.js').get('input.txt', (data) => {
    layout.answer(process(data))
})
