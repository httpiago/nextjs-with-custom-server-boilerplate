import nextServer from 'next'
import { isDev } from '../common/constants'

export const next = nextServer({
  dev: isDev,
  dir: 'client'
})
export const nextHandle = next.getRequestHandler()
