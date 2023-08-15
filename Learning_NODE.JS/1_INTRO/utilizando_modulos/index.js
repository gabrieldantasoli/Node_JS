const fs = require('fs'); // file system

fs.readFile('./1_INTRO/utilizando_modulos/arquivo.txt','utf8',(err,data) => {
    if (err) {
        console.log(err); // pode pegar err.message
        return;
    }

    console.log("-----------------------");
    console.log(data);
    console.log("-----------------------");
});

fs.readFile('./1_INTRO/utilizando_modulos/minhasLinguagensFavoritas.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err.message);
        return;
    }

    console.log(data);
});