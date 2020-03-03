import server from './server'
import { nextjs } from './server/nextjs'
import { green } from 'colors'
import { isDevelopment, PORT, initApiOnly } from './common/constants'

// INIT SERVER!
server.listen(PORT, () => {
  const msg = isDevelopment
    ? `Server started on http://localhost:${PORT}/`
    : `Server started successfully!`
  console.log(green('🚀 ' + msg))

  // Init NextJS
  if (!initApiOnly) {
    nextjs.prepare()
    if (isDevelopment) console.log('Starting NextJS...')
  }
})
