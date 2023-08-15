const fs = require("fs");

console.log("Início.");

fs.writeFileSync('arquivo1.txt',"oi\nolá");

console.log("Fim!");