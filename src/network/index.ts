import { Application } from "express";
import Routes from "../utils/constants/routes.json"
import UserNetwork from "./user"

function routes (server: Application) {
    server.use(Routes.userV1, UserNetwork)
}

export default routes;