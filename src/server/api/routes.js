import { Router } from 'express'
import { welcome } from './controllers'
import v1Routes from './v1/routes'

const routes = Router()

routes.get('/', welcome)
routes.use('/v1', v1Routes)

export default routes
