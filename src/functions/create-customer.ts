import type { CustomerDTO } from "../dto/customer.dto"
import { database } from '../drizzle/client'
import { schema } from "../drizzle/schema"
import { eq } from "drizzle-orm"

export async function createCustomer({
  id,
  name,
  email,
  document,
  neighborhood, 
  number, 
  street, 
  zipcode
}: CustomerDTO): Promise<CustomerDTO[]> {
  const results = await database
    .select()
    .from(schema.customers)
    .where(eq(schema.customers.email, email))

  if (results.length > 0) {
    throw new Error('Customer already exists in the database')
  }

  const createdCustomer = await database
    .insert(schema.customers)
    .values({
      id,
      name,
      email,
      document,
      neighborhood,
      number,
      street,
      zipcode,
    })
    .returning();

  return createdCustomer
}
