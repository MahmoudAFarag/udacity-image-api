import express, { Router, Request, Response } from "express"
// import { promises as fsPromises } from "fs"
// import { createImage, readThumbnail } from "../../utils/handleImage"
// import { FormatEnum } from "sharp"
import imageProcess from "../../middleware/imageProcess"
import thumbnailProcess from "../../middleware/thumbnailProcess"

const images: Router = express.Router()

const middleware = [imageProcess, thumbnailProcess]

// Images api main route
images.get("/", middleware, async (req: Request, res: Response) => {
  res.status(200)
})

export default images
