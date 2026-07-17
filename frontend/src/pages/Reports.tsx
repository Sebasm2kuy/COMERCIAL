export function Reports() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Reportes</h2>
      <div className="grid grid-cols-2 gap-4">
        {['Reporte de Envíos', 'Reporte por Productor', 'Reporte por Temperatura', 'Reporte de Exportación'].map(title => (
          <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 cursor-pointer hover:border-blue-300 transition-colors">
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="text-sm text-gray-400 mt-1">Generar reporte en PDF</p>
          </div>
        ))}
      </div>
    </div>
  )
}
