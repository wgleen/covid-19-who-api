import { Router } from 'express'
import { notFound } from './middlewares'

const routes = Router()

routes.use(notFound)

export default routes
