import { FormatEnum } from "sharp"
import { promises as fsPromises } from "fs"

interface ReadOptions {
  test: boolean
}

// Helper function to read from the thumbnails folder
const readThumbnail = async (
  name: string,
  width: number,
  height: number,
  format: keyof FormatEnum,
  options?: ReadOptions
): Promise<Buffer | boolean> => {
  try {
    let thumbRequested: Buffer

    if (options?.test) {
      thumbRequested = await fsPromises.readFile(`./src/tests/images/thumbnails/${name}_${width}x${height}.${format}`)
    } else {
      thumbRequested = await fsPromises.readFile(`./public/images/thumbnails/${name}_${width}x${height}.${format}`)
    }

    return thumbRequested
  } catch (err) {
    console.log(err)
    return false
  }
}

export default readThumbnail
