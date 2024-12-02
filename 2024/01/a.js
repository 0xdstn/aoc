#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('01','A')

const expected = 11;

const process = (data) => {
    var answer = 0;
    var group1 = [];
    var group2 = [];

    data.forEach(x => {
        var sp = x.split('   ');
        group1.push(parseInt(sp[0]))
        group2.push(parseInt(sp[1]))
    })

    group1.sort();
    group2.sort();

    for(var x = 0; x < group1.length; x++) {
        var tmp = group1[x] - group2[x];
        if(tmp < 0) tmp = tmp*-1;
        answer += tmp
    }

    return answer
};

require('../common/readInput.js').get('input-test.txt', (data) => {
    layout.test(process(data),expected);
})

require('../common/readInput.js').get('input.txt', (data) => {
    layout.answer(process(data))
})
