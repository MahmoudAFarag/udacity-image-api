import express, { Application, Request, Response } from 'express'
import routes from './routes/index'
import { promises as fsPromises } from 'fs'

const app: Application = express()
const port = 3000

app.use(express.static('public'))

app.use('/api', routes)

app.get('/', async (req: Request, res: Response) => {
  res.send('Home Page')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
