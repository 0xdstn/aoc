#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('04','B')

const expected = 30;
var cardClones = [];
var cards = [];


function processCards(c) {
    c.forEach(x => {
        cards[x]++;
        processCards(cardClones[x]);
    });
}

const process = (data) => {
    let answer = 0;
    cards = new Array(data.length).fill(1);
    cardClones = [];

    data.forEach((x) => {
        const sp = x.split(':')
        const sp2 = sp[1].split(' | ');
        const c = Number(sp[0].substr(5));
        const winning = sp2[0].replace(/\s{2}/g,' ').trim().split(' ').map(Number);
        const numbers = sp2[1].replace(/\s{2}/g,' ').trim().split(' ').map(Number);
        let winCount = 0;
        winning.forEach(y => {
            if(numbers.includes(y)) {
                winCount++;
            }
        });
        cardClones.push([]);
        if(winCount) {
            for(var z = c; z <= c+winCount-1; z++) {
                cardClones[c-1].push(z);
            }
        }
    });

    cardClones.forEach(c => {
        processCards(c);
    });

    cards.forEach(a => {
        answer += a;
    });

    return answer
};

require('../common/readInput.js').get('input-test.txt', (data) => {
    layout.test(process(data),expected);
})

require('../common/readInput.js').get('input.txt', (data) => {
    layout.answer(process(data))
})
