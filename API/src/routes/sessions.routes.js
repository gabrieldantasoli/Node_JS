import express from "express";
import { create } from "../controllers/SessionsController.js";

const routes = express.Router();

routes.post("/", create);

export default routes;