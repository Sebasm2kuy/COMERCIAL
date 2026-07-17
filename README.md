# Trazabilidad — Sistema de Trazabilidad Ganadera

## Stack
- **Frontend:** React 19 + Vite + TypeScript + TailwindCSS + shadcn/ui + Recharts + React Query + React Router
- **Backend:** Express + TypeScript + Prisma + PostgreSQL + JWT

## Setup Local

### 1. Backend
```bash
cd backend
cp .env.example .env
npm install
npx prisma generate
npx prisma db push
npm run db:seed
npm run dev
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```

### 3. Docker (todo junto)
```bash
docker-compose up -d
```

## Rutas
- `/` — Dashboard
- `/envios` — Gestión de envíos
- `/trazabilidad` — Búsqueda por N° de Cote
- `/reportes` — Reportes
- `/settings` — Configuración

## API
- `POST /api/auth/login`
- `GET /api/stats`
- `GET /api/shipments`
- `GET /api/shipments/trace/:nroCote`
- `POST /api/shipments`
