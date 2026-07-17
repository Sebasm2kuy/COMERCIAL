import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Search } from 'lucide-react'
import { Shipment } from '../types'

export function Trace() {
  const [nroCote, setNroCote] = useState('')
  const [query, setQuery] = useState('')

  const { data: shipment } = useQuery<Shipment | null>({
    queryKey: ['trace', query],
    queryFn: () => query ? axios.get(`/api/shipments/trace/${query}`).then(r => r.data).catch(() => null) : Promise.resolve(null),
    retry: false,
    enabled: !!query,
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setQuery(nroCote)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Trazabilidad</h2>
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          value={nroCote}
          onChange={e => setNroCote(e.target.value)}
          placeholder="Ingresá N° de Cote..."
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
          <Search className="w-4 h-4" /> Buscar
        </button>
      </form>

      {shipment && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Resultado de Trazabilidad</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-gray-500">N° Cote:</span> <span className="font-medium text-blue-600 ml-1">{shipment.nroCote}</span></div>
            <div><span className="text-gray-500">Fecha Faena:</span> <span className="font-medium ml-1">{shipment.fechaFaena}</span></div>
            <div><span className="text-gray-500">Productor:</span> <span className="font-medium ml-1">{shipment.productor}</span></div>
            <div><span className="text-gray-500">Certificador:</span> <span className="font-medium ml-1">{shipment.certify}</span></div>
            <div><span className="text-gray-500">Establecimiento:</span> <span className="font-medium ml-1">{shipment.establecimientoOrigen}</span></div>
            <div><span className="text-gray-500">Destino:</span> <span className="font-medium ml-1">{shipment.paisDestino}</span></div>
            <div><span className="text-gray-500">Temperatura:</span> <span className="font-medium ml-1">{shipment.temperatura}°C</span></div>
            <div><span className="text-gray-500">Especie:</span> <span className="font-medium ml-1">{shipment.especie}</span></div>
          </div>
        </div>
      )}

      {!shipment && query && (
        <div className="bg-gray-50 rounded-xl p-6 text-center text-gray-500">No se encontró el envío</div>
      )}
    </div>
  )
}
