#!/usr/bin/env node

var layout = require('../common/layout.js')

layout.header('03','A')

const expected = 4361;

function isSymbol(c) {
    return c !== '.' && isNaN(c);
}

const process = (data) => {
    var answer = 0;
    data.forEach(ln => {
        console.log(ln);
    });

    data.forEach((ln,y) => {
        console.log('[+]',y,ln);
        var curNum = '';
        var isPart = false;
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
                if(
                    (x-numDigits-1) >= 0 &&
                    isSymbol(ln[x-numDigits-1])
                ) {
                    console.log('prevdigit true');
                    console.log(
                        (x-numDigits-1) >= 0,
                        isSymbol(ln[x-numDigits-1])
                    );
                    isPart = true;
                }
                // Next digit in row
                if(
                    x !== ln.length-1 &&
                    isSymbol(ln[x])
                ) {
                    console.log('nextdigit true');
                    isPart = true;
                }
                for(let z = x-numDigits-1; z <= x; z++) {
                    //console.log(curNum,z,x,y);
                    // line above
                    if(
                        y !== 0 &&
                        z >= 0 && 
                        isSymbol(data[y-1][z])
                    ) {
                        console.log('lineabove true');
                        isPart = true;
                    }
                    // line below
                    //console.log(y,z);//,data[y+1][z]);
                    if(
                        y !== data.length-1 &&
                        z >= 0 && 
                        z <= ln.length-1 &&
                        isSymbol(data[y+1][z])
                    ) {
                        console.log('linebelow true');
                        isPart = true;
                    }
                }
                console.log('    IS PART',isPart,curNum);
                if(isPart) {
                    answer += curInt;
                }
                curNum = '';
                isPart = false;
            }
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
