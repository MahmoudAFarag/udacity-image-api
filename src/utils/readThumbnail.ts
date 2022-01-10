import { FormatEnum } from "sharp"
import { promises as fsPromises } from "fs"

// Helper function to read from the thumbnails folder
const readThumbnail = async (
  name: string,
  width: number,
  height: number,
  format: keyof FormatEnum
): Promise<Buffer> => {
  const thumbRequested = await fsPromises.readFile(`./public/images/thumbnails/${name}_${width}x${height}.${format}`)
  return thumbRequested
}

export default readThumbnail
