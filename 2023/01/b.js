#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('01','B')

const expected = 281;
const nums = ['one','two','three','four','five','six','seven','eight','nine','1','2','3','4','5','6','7','8','9'];

const process = (data) => {
    var answer = 0;

    data.forEach(x => {
        var firstIndex = [];
        var lastIndex = [];

        nums.forEach(num => {
            firstIndex.push(x.indexOf(num));
            lastIndex.push(x.lastIndexOf(num));
        });

        let lowestFirst = firstIndex.indexOf(Math.min(...firstIndex.filter(n => n > -1)))
        let highestLast = lastIndex.indexOf(Math.max(...lastIndex))

        let first = nums[lowestFirst];
        if(lowestFirst < 9) {
            first = (lowestFirst+1).toString()
        }

        let last = nums[highestLast];
        if(highestLast < 9) {
            last = (highestLast+1).toString()
        }

        answer = answer + parseInt(first+last);
    })

    return answer
};

require('../common/readInput.js').get('input-test2.txt', (data) => {
    layout.test(process(data),expected);
})

require('../common/readInput.js').get('input.txt', (data) => {
    layout.answer(process(data))
})
