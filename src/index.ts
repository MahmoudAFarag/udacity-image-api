import express, { Application, Request, Response } from "express"
import morgan from "morgan"
import routes from "./routes/index"

const app: Application = express()
const port = 3000

// morgan middleware
app.use(morgan("tiny"))

// Import api route
app.use("/api", routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
