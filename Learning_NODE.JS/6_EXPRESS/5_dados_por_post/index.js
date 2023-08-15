const express = require('express');
const path = require('path');
const basePath = path.join(__dirname, 'templates');

const app = express();
const port = 3000;

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.get('/users/add', (req,res) => {
    res.sendFile(`${basePath}/usersform.html`)
})

app.post('/users/save', (req,res) => {
    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usúario é ${name} com idade de ${age} anos`);

    res.sendFile(`${basePath}/usersform.html`)
})

app.get('/users/:id', (req,res) => {
    const id = req.params.id;

    console.log(`Estamos buscando pelo usuário : ${id}`);
    
    res.sendFile(`${basePath}/users.html`);
});

app.get('/', (req,res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})

