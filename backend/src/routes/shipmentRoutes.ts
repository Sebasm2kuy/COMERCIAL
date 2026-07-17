import { Router } from 'express'
import { body } from 'express-validator'
import { shipmentController } from '../controllers/shipmentController'

const router = Router()

router.get('/', shipmentController.list)
router.get('/trace/:nroCote', shipmentController.trace)
router.post('/',
  [body('nroCote').notEmpty(), body('productor').notEmpty()],
  shipmentController.create
)
router.delete('/:id', shipmentController.remove)

export { router as shipmentRouter }
