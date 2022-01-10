import { Request, Response } from "express"
import readThumbnail from "../utils/readThumbnail"
import createThumbnail from "../utils/createThumbnail"
import { FormatEnum } from "sharp"

const thumbnailProcess = async (req: Request, res: Response, next: () => void) => {
  const name = req.query.name as string
  const width = req.query.width as unknown as number
  const height = req.query.height as unknown as number
  const format = req.query.format as keyof FormatEnum
  const image: Buffer = res.locals.image

  //   Check if the user provided a format
  if (!req.query.format) {
    return res.status(404).json({
      error: "please provide a format",
    })
  }

  try {
    // Check if the thumbnail already exists in the thumbnail folder
    const thumbRequested = await readThumbnail(name, width, height, format)
    console.log("Image served from cache")
    res.status(200).end(thumbRequested)
  } catch (err) {
    // If the thumbnail does not exist, process the image with shar
    await createThumbnail(name, image, {
      width,
      height,
      format,
    })
    console.log("Image processing...")
    const thumbRequested = await readThumbnail(name, width, height, format)
    res.end(thumbRequested)
  }

  next()
}

export default thumbnailProcess
