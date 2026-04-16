import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './src/drizzle/migration',
  schema: './src/drizzle/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://docker:docker@localhost:5432/rental_car_api",
  },
});
