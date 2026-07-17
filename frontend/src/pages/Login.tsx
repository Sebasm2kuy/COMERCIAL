import { useState } from 'react'
import { toast } from 'sonner'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    toast.error('Conectá el backend para autenticarte')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white rounded-xl p-8 shadow-md w-96">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Trazabilidad</h1>
        <p className="text-gray-500 text-sm mb-6">Ingresá tus credenciales</p>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700">Ingresar</button>
      </form>
    </div>
  )
}
