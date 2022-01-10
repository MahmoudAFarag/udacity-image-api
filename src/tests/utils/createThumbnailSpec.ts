import { promises as fsPromises } from "fs"
import createThumbnail from "../../utils/createThumbnail"

describe("create thumbnails using sharp", () => {
  let image: Buffer

  beforeAll(async () => {
    image = await fsPromises.readFile("./public/images/full/book.jpg")
  })

  it("should create a 200x200 thumbnail of the image with png extension", async () => {
    const thumbnailCreated = await createThumbnail("test", image, {
      width: 200,
      height: 200,
      format: "png",
    })
    expect(thumbnailCreated).toBeTruthy()
  })

  it("should create a 600x400 thumbnail of the image with webp extension", async () => {
    const thumbnailCreated = await createThumbnail("test", image, {
      width: 600,
      height: 400,
      format: "webp",
    })
    expect(thumbnailCreated).toBeTruthy()
  })
})
