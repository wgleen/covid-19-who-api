import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import loggerMiddleware, { logger } from './lib/logger'
import i18nMiddleware from './lib/i18n'
import apiRoutes from './api/routes'
import { notFound as notFoundMiddleware } from './middlewares'
import config from './config'

export const bootstrap = (options = {}, callback) => {
  const app = express()

  app.use(loggerMiddleware)
  app.use(helmet())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(i18nMiddleware.init)
  app.use(express.static(`${config.paths.assets}`))

  app.use('/api', apiRoutes)
  app.use(notFoundMiddleware)

  return app.listen(options.port, (err) => {
    if (err) return logger.error(err)

    if (callback) callback(app)

    return logger.info(`Listening on port ${options.port}`)
  })
}
