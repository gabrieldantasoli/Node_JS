const fs = require('fs');

if (!fs.existsSync('./minhaPasta')) {
    console.log("Pasta Criada!");
    fs.mkdirSync("minhaPasta");
} else if (fs.existsSync('./minhaPasta')) {
    console.log("Pasta Existe!");
}