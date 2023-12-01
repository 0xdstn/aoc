module.exports.header = (day, letter) => {
    console.log('')
    console.log(`[*] AoC 2022-${day}-${letter}`)
    console.log('')
};

module.exports.test = (answer,expected) => {
    console.log('')
    if(answer === expected) {
        console.log('[+] PASS!');
    } else {
        console.log('[-] FAIL!');
    }
};

module.exports.answer = (answer) => {
    console.log('')
    console.log('[!] Answer:', answer)
};
