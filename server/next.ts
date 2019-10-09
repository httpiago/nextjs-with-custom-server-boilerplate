import nextServer from 'next'
import { isDev } from '../common/constants'

export const nextjs = nextServer({
  dev: isDev,
  dir: 'client'
})
export const nextjsRequestHandler = nextjs.getRequestHandler()
