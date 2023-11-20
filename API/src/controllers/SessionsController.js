import AppError from "../utils/AppError.js";
import pkg from 'jsonwebtoken';
import { authConfig } from "../configs/auth.js";


export const create = async (request, response) => {
    const { sign } = pkg;
    const {email, password} = request.body;

    // Verificar se o usuario existe no banco de dados. ABSTRAIA
    const user = {email: email, password: password};
    //const user = null;

    if (!user) {
        throw new AppError("Email e/ou senha incorreta!", 401);
    }

    // verificar se a senha bate usando bcrypt. ABSTRAIA
    const passwordMatched = true;

    if (!passwordMatched) {
        throw new AppError("Email e/ou senha incorreta!", 401);
    }

    const { secret, expiresIn } = authConfig;
    const token = sign({}, secret, {
        subject: String("129102918435757397"), // ID do USER. ABSTRAIA kkk
        expiresIn
    })

    return response.json({ user, token });
}

