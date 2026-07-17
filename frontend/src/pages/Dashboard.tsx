import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Package, AlertTriangle, CheckCircle, Clock } from 'lucide-react'
import { DashboardStats } from '../types'

export function Dashboard() {
  const { data } = useQuery<DashboardStats>({
    queryKey: ['stats'],
    queryFn: () => axios.get('/api/stats').then(r => r.data),
    retry: false,
  })

  const stats = data ?? { total: 0, activos: 0, pendientes: 0, rechazados: 0 }

  const cards = [
    { label: 'Total Envíos', value: stats.total, icon: Package, color: 'bg-blue-500' },
    { label: 'Activos', value: stats.activos, icon: CheckCircle, color: 'bg-green-500' },
    { label: 'Pendientes', value: stats.pendientes, icon: Clock, color: 'bg-yellow-500' },
    { label: 'Rechazados', value: stats.rechazados, icon: AlertTriangle, color: 'bg-red-500' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {cards.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className={`${color} text-white p-2 rounded-lg`}><Icon className="w-5 h-5" /></span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-gray-500 mt-1">{label}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4">Últimos Envíos</h3>
        <p className="text-gray-500 text-sm">Conectá el backend para ver los datos</p>
      </div>
    </div>
  )
}
