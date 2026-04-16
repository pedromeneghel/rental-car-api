import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './src/drizzle/migration',
  schema: './src/drizzle/schema',
  dialect: 'postgresql',
  dbCredentials: {
<<<<<<< HEAD
    url: "postgresql://docker:docker@localhost:5432/rental_car_api",
=======
    url: "postgresql://docker:docker@localhost:5432/connect",
>>>>>>> e8502d1f4eb81cdbbb3d05cce3b2c2e21e3a65ef
  },
});