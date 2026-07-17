import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Shipment } from '../types'
import { format } from 'date-fns'

export function Shipments() {
  const { data: shipments = [] } = useQuery<Shipment[]>({
    queryKey: ['shipments'],
    queryFn: () => axios.get('/api/shipments').then(r => r.data),
    retry: false,
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Envíos</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          + Nuevo Envío
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">N° Cote</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Faena</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Productor</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Destino</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Temp °C</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {shipments.length === 0 && (
              <tr><td colSpan={6} className="px-4 py-8 text-center text-gray-400">Sin datos — conectá el backend</td></tr>
            )}
            {shipments.map(s => (
              <tr key={s.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-blue-600">{s.nroCote}</td>
                <td className="px-4 py-3 text-gray-600">{format(new Date(s.fechaFaena), 'dd/MM/yyyy')}</td>
                <td className="px-4 py-3 text-gray-600">{s.productor}</td>
                <td className="px-4 py-3 text-gray-600">{s.paisDestino}</td>
                <td className="px-4 py-3 text-gray-600">{s.temperatura}°</td>
                <td className="px-4 py-3"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">Activo</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
