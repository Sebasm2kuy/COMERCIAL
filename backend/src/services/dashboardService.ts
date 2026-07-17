import prisma from '../config/database'

export const dashboardService = {
  async stats() {
    const [total, activos, pendientes, rechazados] = await Promise.all([
      prisma.shipment.count(),
      prisma.shipment.count({ where: { estado: 'activo' } }),
      prisma.shipment.count({ where: { estado: 'pendiente' } }),
      prisma.shipment.count({ where: { estado: 'rechazado' } }),
    ])
    return { total, activos, pendientes, rechazados }
  },
}
