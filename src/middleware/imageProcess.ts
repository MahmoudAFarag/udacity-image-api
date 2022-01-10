import { Request, Response } from "express"
import { promises as fsPromises } from "fs"

const imageProcess = async (req: Request, res: Response, next: () => void) => {
  const name = req.query.name as string
  const width = req.query.width as unknown as number
  const height = req.query.height as unknown as number
  let image: Buffer = Buffer.from("sd")

  // Check if no name is provided
  if (!name) {
    return res.status(404).json({
      error: `Please provide a file name`,
    })
  }

  /* Read the full image requested from the original folder
  wrap in try catch block to catch errors when wrong characters are provided such as:
  url?name=astronaut?width=200 instead of url?name=astronaut&width=200
  */
  try {
    image = await fsPromises.readFile(`./public/images/full/${name}.jpg`)
  } catch (err) {
    return res.status(404).json({
      err,
    })
  }

  // Check if no height or width is provided then return the full image
  if (!width || !height) {
    return res.end(image)
  }

  // Send selected image variable to the next middleware for processing
  res.locals.image = image

  next()
}

export default imageProcess
