import config from './config'
import { initializer } from './app'

const server = initializer({ port: config.port })

export default server
