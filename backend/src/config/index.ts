export const config = {
  jwtSecret: process.env.JWT_SECRET || 'change-me',
  port: process.env.PORT || 3001,
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
}
