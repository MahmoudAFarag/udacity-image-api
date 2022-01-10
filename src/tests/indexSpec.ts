import supertest from "supertest"
import app from "../index"

const request = supertest(app)

describe("Test endpoint responses", () => {
  describe("Test homepage response", () => {
    it("should return a status code of 200", (done) => {
      request.get("/").then((res) => {
        expect(res.status).toBe(200)
        done()
      })
    })

    it("should return a string with 'Image Processing API'", (done) => {
      request.get("/").then((res) => {
        expect(res.text).toBe("Image Processing API")
        done()
      })
    })
  })
})
