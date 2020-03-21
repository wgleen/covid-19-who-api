import { Router } from 'express'
import { welcome } from './controllers'

const routes = Router()

routes.get('/', welcome)

export default routes
