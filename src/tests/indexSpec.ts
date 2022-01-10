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

  describe("Test /images endpoint response", () => {
    it("should return status code 404 when no name is provided", (done) => {
      request.get("/api/images").then((res) => {
        expect(res.statusCode).toBe(404)
        done()
      })
    })

    it("should return status code 200 when name is provided", (done) => {
      request.get("/api/images?name=book").then((res) => {
        expect(res.statusCode).toBe(200)
        done()
      })
    })
  })
})
