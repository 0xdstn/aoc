#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('03','A')

const expected = 467835;

function isGear(c) {
    return c === '*';
}

const process = (data) => {
    var answer = 0;
    var gears = {};
    data.forEach(ln => {
        console.log(ln);
    });

    data.forEach((ln,y) => {
        var curNum = '';
        for(const a in ln) {
            const x = parseInt(a);
            const c = ln[x];
            if(!isNaN(parseInt(c))) {
                curNum += c;
            }

            if(
                (
                    isNaN(parseInt(c)) ||
                    x === ln.length-1
                ) &&
                curNum.length
            ) {
                const curInt = parseInt(curNum); 
                var numDigits = curNum.length;
                if(!isNaN(parseInt(c))) {
                    numDigits = numDigits-1;
                }
                // Previous digit in row
                let prevX = x-numDigits-1;
                if(
                    (prevX) >= 0 &&
                    isGear(ln[prevX])
                ) {
                    console.log('prevdigit true');
                    console.log(
                        prevX >= 0,
                        isGear(ln[prevX])
                    );
                    if(gears[prevX.toString()+'_'+y.toString()] === undefined) {
                        gears[prevX.toString()+'_'+y.toString()] = [];
                    }
                    gears[prevX.toString()+'_'+y.toString()].push(curInt);
                }
                // Next digit in row
                if(
                    x !== ln.length-1 &&
                    isGear(ln[x])
                ) {
                    console.log('nextdigit true');
                    if(gears[x.toString()+'_'+y.toString()] === undefined) {
                        gears[x.toString()+'_'+y.toString()] = [];
                    }
                    gears[x.toString()+'_'+y.toString()].push(curInt);
                }
                for(let z = x-numDigits-1; z <= x; z++) {
                    //console.log(curNum,z,x,y);
                    // line above
                    if(
                        y !== 0 &&
                        z >= 0 && 
                        isGear(data[y-1][z])
                    ) {
                        let curX = z;
                        let curY = y-1;
                        console.log('lineabove true');
                        if(gears[curX.toString()+'_'+curY.toString()] === undefined) {
                            gears[curX.toString()+'_'+curY.toString()] = [];
                        }
                        gears[curX.toString()+'_'+curY.toString()].push(curInt);
                    }
                    // line below
                    //console.log(y,z);//,data[y+1][z]);
                    if(
                        y !== data.length-1 &&
                        z >= 0 && 
                        z <= ln.length-1 &&
                        isGear(data[y+1][z])
                    ) {
                        let curX = z;
                        let curY = y+1;
                        console.log('linebelow true');
                        if(gears[curX.toString()+'_'+curY.toString()] === undefined) {
                            gears[curX.toString()+'_'+curY.toString()] = [];
                        }
                        gears[curX.toString()+'_'+curY.toString()].push(curInt);
                    }
                }
                curNum = '';
            }
        }
    })

    console.log(gears);

    for (const [key, g] of Object.entries(gears)) {
        if(g.length == 2) {
            answer += (g[0]*g[1]);
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
