import { promises as fsPromises } from "fs"
import createThumbnail from "../../utils/createThumbnail"

describe("create thumbnails using sharp", () => {
  let image: Buffer

  beforeAll(async () => {
    image = await fsPromises.readFile("./src/tests/images/full/book.jpg")
  })

  it("should create a 200x200 thumbnail of the image with png extension", async () => {
    const thumbnailCreated = await createThumbnail("test", image, 200, 200, "png", { test: true })
    expect(thumbnailCreated).toBeTruthy()
  })

  it("should create a 600x400 thumbnail of the image with webp extension", async () => {
    const thumbnailCreated = await createThumbnail("test", image, 600, 400, "webp", { test: true })
    expect(thumbnailCreated).toBeTruthy()
  })
})
