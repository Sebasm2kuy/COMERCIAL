import { Router } from 'express'
import { body } from 'express-validator'
import { authController } from '../controllers/authController'

const router = Router()

router.post('/login',
  [body('email').isEmail(), body('password').notEmpty()],
  authController.login
)

export { router as authRouter }
