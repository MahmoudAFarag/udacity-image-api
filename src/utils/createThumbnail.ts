import sharp, { FormatEnum } from "sharp"

interface CreateOptions {
  test: boolean
}

// Helper function to process and save requested image using sharp
const createThumbnail = async (
  name: string,
  image: Buffer,
  width: number,
  height: number,
  format: keyof FormatEnum,
  options?: CreateOptions
): Promise<boolean> => {
  // Process and resize the image according to the size and format provided
  try {
    // Check if test is passed into options, save image to test folder if true
    if (options?.test) {
      await sharp(image)
        .resize(+width, +height)
        .toFormat(format)
        .toFile(`./src/tests/images/thumbnails/${name}_${width}x${height}.${format}`)

      console.log(__dirname)

      return true
    }

    // Save image to public folder if test is not passed into options
    await sharp(image)
      .resize(+width, +height)
      .toFormat(format)
      .toFile(`./public/images/thumbnails/${name}_${width}x${height}.${format}`)

    return true
  } catch (err) {
    return false
  }
}

export default createThumbnail
