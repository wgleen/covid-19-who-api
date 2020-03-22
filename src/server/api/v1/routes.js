import { Router } from 'express'
import config from '../../config'
import {
  swaggerUIServer,
  swaggerUISetup
} from '../../lib/swagger'
import { welcome } from './controllers'

const routes = Router()

const {
  paths: {
    root
  }
} = config

export const configAPIV1 = {
  swaggerDefinition: {
    info: {
      version: '1.0.0'
    }
  },
  apis: [`${root}/server/api/v1/**/controllers.js`]
}

routes.use('/docs', swaggerUIServer, swaggerUISetup(configAPIV1))
routes.get('/', welcome)

export default routes
