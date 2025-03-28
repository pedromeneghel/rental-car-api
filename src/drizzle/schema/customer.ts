import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'

export const customers = pgTable('customers', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 250 }).notNull().unique(),
  document: varchar({ length: 14 }).notNull(),
  street: varchar({ length: 250 }).notNull(),
  number: varchar({ length: 10 }).notNull(),
  neighborhood: varchar({ length: 100 }).notNull(),
  zipcode: varchar({ length: 8 }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
  .notNull()
  .defaultNow(),
})
