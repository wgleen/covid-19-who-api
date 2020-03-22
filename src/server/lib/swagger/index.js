import { merge } from 'lodash'
import config from '../../config'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const {
  app: {
    url
  }
} = config

export const swaggerJsDocOptions = {
  swaggerDefinition: {
    info: {
      title: 'covid-19-who-api',
      description: 'COVID-19 API from WHO data reports',
      servers: url,
      contact: {
        name: 'Wallace Gleen',
        email: 'wallace.gleen@gmail.com'
      }
    }
  }
}

export const swaggerUIServer = swaggerUI.serve

export const swaggerUISetup = (options = {}) => {
  const newOptions = merge({}, swaggerJsDocOptions, options)
  const swaggerDocs = swaggerJsDoc(newOptions)

  return swaggerUI.setup(swaggerDocs)
}
