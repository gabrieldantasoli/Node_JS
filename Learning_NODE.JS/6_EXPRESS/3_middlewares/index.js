const express = require('express');
const path = require('path');
const basePath = path.join(__dirname, 'templates');

const app = express();
const port = 3000;

const checkAuth = function(req, res, templates) {
    req.authStatus = true;

    if (req.authStatus) {
        console.log("Está logado!");
        req.next();
    } else {
        console.log("Não está logado!");
        req.next();
    }
}

app.use(checkAuth);

app.get('/', (req,res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})