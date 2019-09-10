import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { nextRequestHandler } from './next'
import { initApiOnly } from '../common/constants'
import api from './api'

const server = express()

server.disable('x-powered-by')
server.use(express.static('public'))
server.use(bodyParser.json())
server.use(morgan('dev', {
  skip: (req) => req.url.includes('/_next/')
}))

// Register routes
server.use('/api', api)

// Allow NextJS handle other requests to deliver pages, style files and errors.
if (!initApiOnly) {
  server.all('*', (req, res) => {
    nextRequestHandler(req, res)
  })
}

export default server