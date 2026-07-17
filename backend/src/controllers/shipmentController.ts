import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { shipmentService } from '../services/shipmentService'

export const shipmentController = {
  async list(_req: Request, res: Response) {
    const shipments = await shipmentService.list()
    res.json(shipments)
  },
  async trace(req: Request, res: Response) {
    const shipment = await shipmentService.trace(req.params.nroCote)
    if (!shipment) return res.status(404).json({ error: 'No encontrado' })
    res.json(shipment)
  },
  async create(req: Request, res: Response) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors })
    const shipment = await shipmentService.create(req.body)
    res.status(201).json(shipment)
  },
  async remove(req: Request, res: Response) {
    await shipmentService.remove(req.params.id)
    res.status(204).send()
  },
}
