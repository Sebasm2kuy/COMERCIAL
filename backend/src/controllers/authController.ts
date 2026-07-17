import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { authService } from '../services/authService'

export const authController = {
  async login(req: Request, res: Response) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors })
    const result = await authService.login(req.body)
    res.json(result)
  },
}
