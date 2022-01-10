import readThumbnail from "../../utils/readThumbnail"

describe("read thumbnails from the thumbnails folder", () => {
  it("should read a 200x200 thumbnail of the image with png extension", async () => {
    const thumbnailRequested = await readThumbnail("test", 200, 200, "png", {
      test: true,
    })
    expect(thumbnailRequested).toBeTruthy()
  })

  it("should read a 600x400 thumbnail of the image with webp extension", async () => {
    const thumbnailRequested = await readThumbnail("test", 600, 400, "webp", {
      test: true,
    })
    expect(thumbnailRequested).toBeTruthy()
  })
})
