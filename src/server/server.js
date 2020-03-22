import config from './config'
import { initializer } from './app'

const { port } = config.app

const bootstrap = initializer()

const server = bootstrap({ port })

export default server
