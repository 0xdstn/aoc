#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('02','A')

//12 red cubes, 13 green cubes, and 14 blue cubes
var red = 12;
var green = 13;
var blue = 14;

const expected = 8;

const process = (data) => {
    var answer = 0;

    data.forEach(x => {
        var sp = x.substring(5).split(': ');
        var game = parseInt(sp[0]);
        var draws = sp[1].split('; ');
        var valid = true;
        draws.forEach(y => {
            var colors = y.split(', ');
            colors.forEach(z => {
                var c = z.split(' ');
                var num = parseInt(c[0]);
                var color = c[1];
                if(color === 'red') {
                    if(num > red) {
                        valid = false;
                    }
                } else if(color === 'blue') {
                    if(num > blue) {
                        valid = false;
                    }
                } else if(color === 'green') {
                    if(num > green) {
                        valid = false;
                    }
                }
            });
            console.log('[+]',game,y)
        });

        if(valid) {
            answer += game;
        }
    })

    return answer
};

require('../common/readInput.js').get('input-test.txt', (data) => {
    layout.test(process(data),expected);
})

require('../common/readInput.js').get('input.txt', (data) => {
    layout.answer(process(data))
})
