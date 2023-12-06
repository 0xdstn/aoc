#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('05','A')

const expected = 35;

const process = (data) => {
    let seeds = [];
    let answer = 0;
    let inSTS = false;
    let inSTF = false;
    let inFTW = false;
    let inWTL = false;
    let inLTT = false;
    let inTTH = false;
    let inHTL = false;

    let rangesSTS = [];
    let rangesSTF = [];
    let rangesFTW = [];
    let rangesWTL = [];
    let rangesLTT = [];
    let rangesTTH = [];
    let rangesHTL = [];


    data.forEach(x => {
        if(x === '') {
            inSTS = false;
            inSTF = false;
            inFTW = false;
            inWTL = false;
            inLTT = false;
            inTTH = false;
            inHTL = false;
            return;
        }

        if(x.startsWith('seeds:')) {
            seeds = x.substr(7).split(' ').map(Number);
            //console.log('[+] SEEDS',seeds);
        } else if(x.startsWith('seed-to-soil')) {
            inSTS = true; 
        } else if(x.startsWith('soil-to-fertilizer')) {
            inSTF = true;
        } else if(x.startsWith('fertilizer-to-water')) {
            inFTW = true;
        } else if(x.startsWith('water-to-light')) {
            inWTL = true;
        } else if(x.startsWith('light-to-temperature')) {
            inLTT = true;
        } else if(x.startsWith('temperature-to-humidity')) {
            inTTH = true;
        } else if(x.startsWith('humidity-to-location')) {
            inHTL = true;
        } else {
            const sp = x.split(' ').map(Number);

            if(inSTS) {
                rangesSTS.push(sp);
            } else if(inSTF) {
                rangesSTF.push(sp);
            } else if(inFTW) {
                rangesFTW.push(sp);
            } else if(inWTL) {
                rangesWTL.push(sp);
            } else if(inLTT) {
                rangesLTT.push(sp);
            } else if(inTTH) {
                rangesTTH.push(sp);
            } else if(inHTL) {
                rangesHTL.push(sp);
            }
        }
    });

    seeds.forEach(seed => {
        let soil;
        let fert;
        let watr;
        let lite;
        let temp;
        let humi;
        let loca;

        rangesSTS.forEach(x => {
            if(seed >= x[1] && seed < x[1]+x[2]) {
                soil = seed+x[0]-x[1];
            }
        });
        if(soil === undefined) soil = seed;

        rangesSTF.forEach(x => {
            if(soil >= x[1] && soil < x[1]+x[2]) {
                fert = soil+x[0]-x[1];
            }
        });
        if(fert === undefined) fert = soil;

        rangesFTW.forEach(x => {
            if(fert >= x[1] && fert < x[1]+x[2]) {
                watr = fert+x[0]-x[1];
            }
        });
        if(watr === undefined) watr = fert;

        rangesWTL.forEach(x => {
            if(watr >= x[1] && watr < x[1]+x[2]) {
                lite = watr+x[0]-x[1];
            }
        });
        if(lite === undefined) lite = watr;

        rangesLTT.forEach(x => {
            if(lite >= x[1] && lite < x[1]+x[2]) {
                temp = lite+x[0]-x[1];
            }
        });
        if(temp === undefined) temp = lite;

        rangesTTH.forEach(x => {
            if(temp >= x[1] && temp < x[1]+x[2]) {
                humi = temp+x[0]-x[1];
            }
        });
        if(humi === undefined) humi = temp;

        rangesHTL.forEach(x => {
            if(humi >= x[1] && humi < x[1]+x[2]) {
                loca = humi+x[0]-x[1];
            }
        });
        if(loca === undefined) loca = humi;

        if(answer === 0 || answer > loca) answer = loca;

        //console.log('SEED',seed);
        //console.log('SOIL',soil);
        //console.log('FERT',fert);
        //console.log('WATR',watr);
        //console.log('LITE',lite);
        //console.log('TEMP',temp);
        //console.log('HUMI',humi);
        //console.log('LOCA',loca);
        //console.log('');
    });

    return answer
};

require('../common/readInput.js').get('input-test.txt', (data) => {
    layout.test(process(data),expected);
})

require('../common/readInput.js').get('input.txt', (data) => {
    layout.answer(process(data))
})
