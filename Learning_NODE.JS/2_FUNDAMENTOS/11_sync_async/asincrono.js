const fs = require('fs');

console.log("Início.");

fs.writeFile("arquivo1.txt","Hello", function (err) {
    setTimeout(function() {
        console.log("Arquivo Criado!");
    },2000);
})

console.log("Fim!");