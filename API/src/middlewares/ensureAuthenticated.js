import pkg from "jsonwebtoken";
import AppError from "../utils/AppError.js";
import { authConfig } from "../configs/auth.js";

export const ensureAuthenticated = async (request, response, next) => {
    const {verify} = pkg;
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("JWT token não informado", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, authConfig.secret);

        request.user = {
            id: Number(user_id),
        }

        return next();
    } catch {
        throw new AppError("JWT token inválido", 401);
    }
}