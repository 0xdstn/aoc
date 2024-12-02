#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('01','B')

const expected = 31;

const process = (data) => {
    var answer = 0;
    var group1 = [];
    var group2 = [];

    data.forEach(x => {
        var sp = x.split('   ');
        group1.push(parseInt(sp[0]))
        group2.push(parseInt(sp[1]))
    })

    group1.forEach(x => {
        var similarity = group2.filter((v) => (v === x)).length;
        answer += x * similarity;
    });

    return answer
};

require('../common/readInput.js').get('input-test.txt', (data) => {
    layout.test(process(data),expected);
})

require('../common/readInput.js').get('input.txt', (data) => {
    layout.answer(process(data))
})
