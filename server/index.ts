import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { green } from 'colors'
import { next } from './next'
import { PORT, isDev } from '../common/constants'
import api from './api'
import routes from './routes'

const app = express()

app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(bodyParser.json())

// Register routes
app.use('/api', api)

// Register client routes
app.use(routes)

// INIT SERVER!
app.listen(PORT, () => {
  const msg = isDev ? `Server started on http://localhost:${PORT}/` : `Server started!`
  console.log(green('> ' + msg))

  // Init NextJS
  next.prepare()
  console.log('Starting NextJS...')
})
