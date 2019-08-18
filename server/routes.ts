import { Router } from 'express'
import { next, nextHandle } from './next'

/**
 * Make Next's pages within client/pages available for express public routes.
 * Please note the default file routing is disabled in next.config.js, only the pages listed below will be publicly available.
 *
 * @see https://expressjs.com/en/guide/routing.html#route-paths
 *
 * @example
 * {
 *   "/express-path-pattern": "/next's-page-file-name"
 * }
 */
const routeMap = {
  '/': '/home',
}

const routes = Router()
// Register Next's pages in Express
Object.entries(routeMap).forEach(([expressPath, nextPageFile]) => {
  routes.get(expressPath, (req, res) => {
    next.render(req, res, nextPageFile, Object.assign(req.query, req.params))
  })
})

// Allow Next handle other requests to deliver style files and error pages.
routes.all('*', (req, res) => {
  nextHandle(req, res)
})

export default routes
