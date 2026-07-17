import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { config } from '../config'
import prisma from '../config/database'
import { AuthBody } from '../types/auth'

export const authService = {
  async login({ email, password }: AuthBody) {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user || !await bcrypt.compare(password, user.password)) {
      throw new Error('Credenciales inválidas')
    }
    const token = jwt.sign({ userId: user.id }, config.jwtSecret, { expiresIn: '7d' })
    return { token, user: { id: user.id, email: user.email, name: user.name } }
  },
  async register({ email, password, name }: { email: string; password: string; name: string }) {
    const hash = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({ data: { email, password: hash, name } })
    const token = jwt.sign({ userId: user.id }, config.jwtSecret, { expiresIn: '7d' })
    return { token, user: { id: user.id, email: user.email, name: user.name } }
  },
}
