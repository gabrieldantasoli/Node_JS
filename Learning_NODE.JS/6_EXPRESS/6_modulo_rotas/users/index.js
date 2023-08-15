const express = require('express');
const router = express.Router();
const path = require('path');
const basePath = path.join(__dirname, '../templates');

console.log(basePath);



router.get('/add', (req,res) => {
    res.sendFile(`${basePath}/usersform.html`)
})

router.post('/save', (req,res) => {
    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usúario é ${name} com idade de ${age} anos`);

    res.sendFile(`${basePath}/usersform.html`)
})

router.get('/:id', (req,res) => {
    const id = req.params.id;

    console.log(`Estamos buscando pelo usuário : ${id}`);
    
    res.sendFile(`${basePath}/users.html`);
});

router.get('/', (req,res) => {
    res.sendFile(`${basePath}/index.html`);
});

module.exports = router;