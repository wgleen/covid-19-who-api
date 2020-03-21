import config from './config'
import { bootstrap } from './app'

const server = bootstrap({ port: config.port })

export default server
