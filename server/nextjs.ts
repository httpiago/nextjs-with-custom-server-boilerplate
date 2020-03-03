import nextServer from 'next'
import { isDevelopment } from '../common/constants'

export const nextjs = nextServer({
  dev: isDevelopment,
  dir: 'client'
})
export const nextjsRequestHandler = nextjs.getRequestHandler()
