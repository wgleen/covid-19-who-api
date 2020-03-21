import path from 'path'

const root = path.join(__dirname, '../../../')

const config = {
  port: process.env.PORT,
  paths: {
    server: `${root}src/server`,
    dist: `${root}dist`,
    assets: `${root}dist/assets`
  }
}

export default config
