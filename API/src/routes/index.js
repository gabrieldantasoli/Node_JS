import express from "express";

import usersRoutes from "./user.routes.js";

const routes = express.Router();

routes.use("/users", usersRoutes);

export default routes;