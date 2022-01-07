import sharp, { FormatEnum } from "sharp"

// Helper function to process and save requested image using sharp
const createThumbnail = async (
  name: string,
  image: Buffer,
  width: number,
  height: number,
  format: keyof FormatEnum
): Promise<void> => {
  // Process and resize the image according to the size and format provided
  await sharp(image)
    .resize(+width, +height)
    .toFormat(format)
    .toFile(`./public/images/thumbnails/${name}_${width}x${height}.${format}`)
}

export default createThumbnail
