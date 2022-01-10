import readThumbnail from "../../utils/readThumbnail"

describe("read thumbnails from the thumbnails folder", () => {
  it("should read a 200x200 thumbnail of the image with png extension", async () => {
    const thumbnailRequested = await readThumbnail("test", {
      width: 200,
      height: 200,
      format: "png",
    })
    expect(thumbnailRequested).toBeTruthy()
  })

  it("should read a 600x400 thumbnail of the image with webp extension", async () => {
    const thumbnailRequested = await readThumbnail("test", {
      width: 600,
      height: 400,
      format: "webp",
    })
    expect(thumbnailRequested).toBeTruthy()
  })
})
