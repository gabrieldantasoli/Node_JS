import express, { query } from "express";

import { create, getId, query1 } from "../controllers/UsersController.js";

const routes = express.Router();

function  myMiddleware(req, res, next) {
    console.log("Você passou pelo Midldleware!");

    if (!req.body.isAdmin) {
        return res.json({ message: "User unauthorized!"});
    }

    next();
}

routes.use(myMiddleware);


routes.get("/message/:id", getId)

routes.get("/", query1);

routes.post("/", create);

export default routes;