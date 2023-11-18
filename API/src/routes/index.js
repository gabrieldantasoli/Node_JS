import express from "express";

import usersRoutes from "./user.routes.js";
import sessionsRoutes from "./sessions.routes.js";

const routes = express.Router();

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);

export default routes;