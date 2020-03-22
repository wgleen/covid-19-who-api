import config from './config'
import { initializer } from './app'

const bootstrap = initializer()

const server = bootstrap({ port: config.port })

export default server
