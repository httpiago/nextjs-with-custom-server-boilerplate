import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { nextjsRequestHandler } from './nextjs'
import { initApiOnly } from '../common/constants'
import apiRoutes from './api'

const server = express()

server.use(express.static('public'))
server.use(bodyParser.json())
server.use(morgan('dev', {
  skip: (req) => req.url.includes('/_next/')
}))

// Register routes
server.use('/api', apiRoutes)

if (!initApiOnly) {
  // @ts-ignore  Allow NextJS handle other requests to deliver pages, style files and errors.
  server.all('*', nextjsRequestHandler)
}

export default server
