import cluster from 'cluster'
import os from 'os'
import config from './config'
import { logger } from './lib/logger'
import { initializer } from './app'

const bootstrap = initializer()

const numCPUs = os.cpus().length

if (cluster.isMaster) {
  logger.info(`Master ${process.pid} is running`)

  for (let i = 0; i < numCPUs; i++)
    cluster.fork()

    cluster.on('exit', worker => {
      logger.info(`worker ${worker.process.pid} died`)
      cluster.fork()
    })
} else {
  bootstrap({ port: config.port }, () => {
    logger.info(`Worker ${cluster.worker.id} running @ process ${cluster.worker.process.pid}!`)
  })
}
