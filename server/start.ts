import server from './server'
import { nextjs } from './next'
import { green } from 'colors'
import { PORT, isDev, initApiOnly } from '../common/constants'

// INIT SERVER!
server.listen(PORT, () => {
  const msg = isDev ? `Server started on http://localhost:${PORT}/` : `Server started successfully!`
  console.log(green('> ' + msg))

  // Init NextJS
  if (!initApiOnly) {
    nextjs.prepare()
    if (isDev) console.log('Starting NextJS...')
  }
})