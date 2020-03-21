import cluster from 'cluster'
import os from 'os'
import { logger } from './lib/logger'
import { bootstrap } from './app'

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
  bootstrap({ port: 3000 }, () => {
    logger.info(`Worker ${cluster.worker.id} running @ process ${cluster.worker.process.pid}!`)
  })
}
