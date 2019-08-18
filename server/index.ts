import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import { green } from 'colors'
import { PORT, isDev } from '../common/constants'
import api from './routes/api'

const app = express()

// Register middlewares
// app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

// Register routes
app.use('/api', api)

// TODO: Cadastrar o next

app.listen(PORT, () => {
  const msg = isDev ? `Server started on http://localhost:${PORT}/` : `Server started!`
  console.log(green(msg));
})
