#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('01','A')

const expected = 142;

const process = (data) => {
    var answer = 0;

    data.forEach(x => {
        var first = '';
        var last = '';
        for(y in x) {
            let num = parseInt(x[y]);
            if(!isNaN(num)) {
                if(first === '') {
                    first = num.toString();
                    last = num.toString();
                } else {
                    last = num.toString();
                }
            }
        }
        answer = answer + parseInt(first+last);
    })

    return answer
};

require('../common/readInput.js').get('input-test.txt', (data) => {
    layout.test(process(data),expected);
})

require('../common/readInput.js').get('input.txt', (data) => {
    layout.answer(process(data))
})
