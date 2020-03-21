import winston from 'winston'
import morgan from 'morgan'

const level = process.env.LOG_LEVEL

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level,
      format: winston.format.simple()
    })
  ],
  exitOnError: false
})

const middleware = morgan('combined', {
  stream: {
    write: message => logger.info(message)
  }
})

export default middleware
