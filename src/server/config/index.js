import path from 'path'

const root = path.join(__dirname, '../../../')

const protocol = process.env.APP_PROTOCOL
const host = process.env.APP_HOST
const port = process.env.APP_PORT

const config = {
  app: {
    protocol,
    host,
    port,
    url: `${protocol}://${host}:${port}`,
    logLevel: process.env.APP_LOG_LEVEL
  },
  paths: {
    root: `${root}${process.env.ROOT_PATH}`,
    server: `${root}src/server`,
    dist: `${root}dist`,
    assets: `${root}dist/assets`
  },
  database: {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT
  },
  swagger: {
    servers: [process.env.SWAGGER_SERVERS],
    apis: [process.env.SWAGGER_APIS]
  }
}

export default config
