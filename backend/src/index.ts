import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { authRouter } from './routes/authRoutes'
import { shipmentRouter } from './routes/shipmentRoutes'
import { dashboardRouter } from './routes/dashboardRoutes'
import { errorHandler } from './middleware/errorHandler'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/auth', authRouter)
app.use('/api/shipments', shipmentRouter)
app.use('/api', dashboardRouter)

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
