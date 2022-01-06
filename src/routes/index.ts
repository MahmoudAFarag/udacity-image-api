import express, { Router } from "express"
import images from "./api/images"

const routes: Router = express.Router()

routes.use("/images", images)

export default routes
