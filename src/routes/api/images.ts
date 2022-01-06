import express, { Router, Request, Response } from "express"
import { promises as fsPromises } from "fs"
import { createImage, readThumbnail } from "../../utils/handleImage"
import { FormatEnum } from "sharp"

const images: Router = express.Router()

// Images api main route
images.get("/", async (req: Request, res: Response) => {
  // Extract query parameters provided into variable
  const name = req.query.name as string
  const width = req.query.width as unknown as number
  const height = req.query.height as unknown as number
  const format = req.query.format as keyof FormatEnum

  // Check that atleast a name is provided
  if (!name) {
    return res.status(404).send(`Please provide a file name`)
  }

  // Read the full image requested from the original folder
  const image = await fsPromises.readFile(`./public/images/full/${name}.jpg`)

  // Check if no height or width is provided then return the full image
  if (!width || !height) {
    res.set("Content-Type", "image/jpeg")
    return res.end(image)
  }

  try {
    // Check if the thumbnail already exists in the thumbnail folder
    const thumbRequested = await readThumbnail(name, width, height, format)
    res.status(200).end(thumbRequested)
  } catch (err) {
    // If the thumbnail does not exist, process the image with sharp
    await createImage(name, image, width, height, format)
    const thumbnail = await readThumbnail(name, width, height, format)
    res.end(thumbnail)
  }
})

export default images
