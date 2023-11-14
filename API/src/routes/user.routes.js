import express, { query } from "express";

import { create, getId, query1 } from "../controllers/UsersController.js";

const routes = express.Router();

routes.get("/message/:id", getId)

routes.get("/", query1);

routes.post("/", create);

export default routes;