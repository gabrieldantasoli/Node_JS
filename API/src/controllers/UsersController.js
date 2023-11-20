import AppError from "../utils/AppError.js";

export const create = (req, res) => {
    const {name, email, password} = req.body;

    if (!name) {
        throw new AppError("Nome é obrigatório!");
    }

    res.send(`Usuário: ${name}, Email: ${email}, Senha: ${password}`);
}

export const update = (req, res) => {
    const {email, password, old_password} = req.body;
    const user_id = req.user.id;

    // Procurar usuário no banco de dados 
    const user = { email, password, old_password};
    // const user = null;

    if (!user) {
        throw new AppError("Nome é obrigatório!");
    }

    // Lógica da atualização

    // Verificação das senhas
    if (password == old_password) {
        throw new AppError("As senhas são iguais!");
    }

    // Atualização usando user_id

    res.send(`Email: ${email}, Senha: ${old_password}, Nova Senha: ${password}`);
}


export const query1 = async (req, res) => {
    const {page, limit} = req.query;

    res.send(`Página: ${page}, Limit: ${limit} .`);
}

export const getId = async (req, res) => {
    res.send(`O id da mensagen é: ${req.params.id}`);
}

