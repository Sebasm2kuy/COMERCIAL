import { Request, Response } from 'express'
import { dashboardService } from '../services/dashboardService'

export const dashboardController = {
  async stats(_req: Request, res: Response) {
    const stats = await dashboardService.stats()
    res.json(stats)
  },
}
