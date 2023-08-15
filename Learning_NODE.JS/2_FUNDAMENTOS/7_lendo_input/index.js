const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Sua linguagem favorita ? ", (language) => {
    console.log(`Preferida é ${language}`);
    readline.close();
})