import path from 'path'

const root = path.join(__dirname, '../../../')

const config = {
  port: process.env.PORT,
  paths: {
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
  }
}

export default config
