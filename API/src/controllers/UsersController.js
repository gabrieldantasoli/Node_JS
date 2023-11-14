import AppError from "../utils/AppError.js";

export const create = (req, res) => {
    const {name, email, password} = req.body;

    if (!name) {
        throw new AppError("Nome é obrigatório!");
    }

    res.send(`Usuário: ${name}, Email: ${email}, Senha: ${password}`);
}

export const query1 = async (req, res) => {
    const {page, limit} = req.query;

    res.send(`Página: ${page}, Limit: ${limit} .`);
}

export const getId = async (req, res) => {
    res.send(`O id da mensagen é: ${req.params.id}`);
}

