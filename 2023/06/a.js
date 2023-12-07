#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('06','A')

const expected = 288;

const process = (data) => {
    var answer = 0;

    let times = data[0].substr(11).trim().split(/\s+/g).map(Number);
    let distances = data[1].substr(11).trim().split(/\s+/g).map(Number);

    console.log('TIMES',times);
    console.log('DISTS',distances);


    for(let x = 0; x < times.length; x++) {
        let t = times[x];
        let d = distances[x];
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
    }

    return answer
};

require('../common/readInput.js').get('input-test.txt', (data) => {
    layout.test(process(data),expected);
})

require('../common/readInput.js').get('input.txt', (data) => {
    layout.answer(process(data))
})
