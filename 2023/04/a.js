#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('04','A')

const expected = 13;

const process = (data) => {
    var answer = 0;

    data.forEach(x => {
        let cur = 0;
        const sp = x.split(':')[1].split(' | ');
        const winning = sp[0].replace(/\s{2}/g,' ').trim().split(' ').map(Number);
        const numbers = sp[1].replace(/\s{2}/g,' ').trim().split(' ').map(Number);
        winning.forEach(y => {
            if(numbers.includes(y)) {
                if(cur === 0) {
                    cur = 1;
                } else {
                    cur = cur*2;
                }
            }
        });

        answer += cur;
    })

    return answer
};

require('../common/readInput.js').get('input-test.txt', (data) => {
    layout.test(process(data),expected);
})

require('../common/readInput.js').get('input.txt', (data) => {
    layout.answer(process(data))
})
