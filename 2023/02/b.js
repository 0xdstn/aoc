#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('02','B')

const expected = 2286;

const process = (data) => {
    var answer = 0;

    data.forEach(x => {
        var red = 0;
        var green = 0;
        var blue = 0;
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
                        red = num;
                    }
                } else if(color === 'blue') {
                    if(num > blue) {
                        blue = num;
                    }
                } else if(color === 'green') {
                    if(num > green) {
                        green = num;
                    }
                }
            });
            console.log('[+]',game,y)
        });

        answer += (red*blue*green);
    })

    return answer
};

require('../common/readInput.js').get('input-test.txt', (data) => {
    layout.test(process(data),expected);
})

require('../common/readInput.js').get('input.txt', (data) => {
    layout.answer(process(data))
})
