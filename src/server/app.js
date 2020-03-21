import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import loggerMiddleware, { logger } from './lib/logger'
import routes from './api/routes'
import config from './config'

export const bootstrap = (options = {}, callback) => {
  const app = express()

  app.use(loggerMiddleware)
  app.use(helmet())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(express.static(`${config.paths.assets}`))

  app.get('/', (_req, res) => {
    res.send('Hello World')
  })

  app.use(routes)

  return app.listen(options.port, (err) => {
    if (err) return logger.error(err)

    if (callback) callback(app)

    return logger.info(`Listening on port ${options.port}`)
  })
}
