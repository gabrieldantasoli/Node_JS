import express from "express";

const routes = express.Router();

routes.get("/message/:id", (req, res) => {
    res.send(`O id da mensagen é: ${req.params.id}`);
})

routes.get("/", (req, res) => {
    const {page, limit} = req.query;

    res.send(`Página: ${page}, Limit: ${limit} .`);
});

routes.post("/", (req, res) => {
    const {name, email, password} = req.body;

    res.send(`Usuário: ${name}, Email: ${email}, Senha: ${password}`);
});

export default routes;