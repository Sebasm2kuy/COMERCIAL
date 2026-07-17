export interface Shipment {
  id: string
  nroCote: string
  fechaFaena: string
  fechaProduccion: string
  fechaConjelacion: string
  establecimientoOrigen: string
  establecimientoDestino: string
  productor: string
  certify: string
  especie: string
  temperatura: number
  paisDestino: string
  createdAt: string
}

export interface DashboardStats {
  total: number
  activos: number
  pendientes: number
  rechazados: number
}
