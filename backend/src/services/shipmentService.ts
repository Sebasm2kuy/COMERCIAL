import prisma from '../config/database'
import { ShipmentBody } from '../types/shipment'

export const shipmentService = {
  async list() {
    return prisma.shipment.findMany({ orderBy: { createdAt: 'desc' } })
  },
  async trace(nroCote: string) {
    return prisma.shipment.findUnique({ where: { nroCote } })
  },
  async create(data: ShipmentBody) {
    return prisma.shipment.create({
      data: {
        ...data,
        fechaFaena: new Date(data.fechaFaena),
        fechaProduccion: new Date(data.fechaProduccion),
        fechaConjelacion: new Date(data.fechaConjelacion),
      },
    })
  },
  async remove(id: string) {
    return prisma.shipment.delete({ where: { id } })
  },
}
