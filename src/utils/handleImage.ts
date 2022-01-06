import sharp, { FormatEnum } from "sharp"
import { promises as fsPromises } from "fs"

// Helper function to read from the thumbnails folder
export const readThumbnail = async (
  name: string,
  width: number,
  height: number,
  format: keyof FormatEnum
): Promise<Buffer> => {
  const thumbRequested = await fsPromises.readFile(`./public/images/thumbnails/${name}_${width}x${height}.${format}`)
  return thumbRequested
}

// Helper function to process and save requested image using sharp
export const createImage = async (
  name: string,
  image: Buffer,
  width: number,
  height: number,
  format: keyof FormatEnum
): Promise<void> => {
  await sharp(image)
    .resize(+width, +height)
    .toFormat(format)
    .toFile(`./public/images/thumbnails/${name}_${width}x${height}.${format}`)
}
