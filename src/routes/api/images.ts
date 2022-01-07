import express, { Router, Request, Response } from "express"
import imageProcess from "../../middleware/imageProcess"
import thumbnailProcess from "../../middleware/thumbnailProcess"

const images: Router = express.Router()

const middleware = [imageProcess, thumbnailProcess]

// Images api main route
images.get("/", middleware, async (req: Request, res: Response) => {
  res.status(200)
})

export default images
