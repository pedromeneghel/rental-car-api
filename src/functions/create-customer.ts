import type { CustomerDTO } from "../dto/customer.dto"
import { db } from '../drizzle/client'
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
  const results = await db
    .select()
    .from(schema.customers)
    .where(eq(schema.customers.email, email))

  if (results.length > 0) {
    throw new Error('Customer already exists')
  }

  const createdCustomer = await db
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
