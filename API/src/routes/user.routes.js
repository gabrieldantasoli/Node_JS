import express from "express";
import { create, getId, query1, update } from "../controllers/UsersController.js";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated.js";

const routes = express.Router();

function  myMiddleware(req, res, next) {
    console.log("Você passou pelo Midldleware!");

    if (!req.body.isAdmin) {
        return res.json({ message: "User unauthorized!"});
    }

    next();
}

//routes.use(myMiddleware);

routes.use(ensureAuthenticated);

routes.put("/update", update);

routes.get("/message/:id", getId)

routes.get("/", query1);

routes.post("/", create);

export default routes;