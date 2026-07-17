import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hash = await bcrypt.hash('admin123', 10)
  await prisma.user.upsert({
    where: { email: 'admin@trazabilidad.com' },
    update: {},
    create: { email: 'admin@trazabilidad.com', password: hash, name: 'Administrador' },
  })

  const shipments = [
    { nroCote: 'COTE-001', fechaFaena: new Date('2026-01-10'), fechaProduccion: new Date('2026-01-11'), fechaConjelacion: new Date('2026-01-12'), establecimientoOrigen: 'Frigorifico Central', establecimientoDestino: 'Importadora Norte', productor: 'Ganaderia La Esperanza', certify: 'Certificadora RX', especie: 'Bovino', temperatura: -18, paisDestino: 'Chile' },
    { nroCote: 'COTE-002', fechaFaena: new Date('2026-01-15'), fechaProduccion: new Date('2026-01-16'), fechaConjelacion: new Date('2026-01-17'), establecimientoOrigen: 'Frigorifico Sur', establecimientoDestino: 'Export SA', productor: 'Hacienda Los Alamos', certify: 'Certificadora RX', especie: 'Bovino', temperatura: -20, paisDestino: 'Brasil' },
  ]
  for (const s of shipments) {
    await prisma.shipment.upsert({ where: { nroCote: s.nroCote }, update: {}, create: s })
  }
  console.log('Seed done')
}

main().finally(() => prisma.$disconnect())
