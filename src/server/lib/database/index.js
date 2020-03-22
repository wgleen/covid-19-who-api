import Mongoose from 'mongoose'
import { logger } from '../logger'
import config from '../../config'

const db = Mongoose.connection

export const initializer = callback => {
  db.on('error', err => logger.error(err))

  db.once('open', () => {
    logger.info('Successfully connect with database')

    if (callback) callback()
  })

  const {
    host,
    username,
    password,
    name,
    port
  } = config.database

  Mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}
