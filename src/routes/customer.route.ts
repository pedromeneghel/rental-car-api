import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { createCustomer } from '../functions/create-customer'
import crypto from 'node:crypto'

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/customer',
    {
      schema: {
        summary: 'Create a new customer',
        operationId: 'createNewCustomer',
        tags: ['customer'],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          document: z.string().max(14),
          street: z.string().max(255),
          number: z.string(),
          neighborhood: z.string().max(100),
          zipcode: z.string().max(8)
        }),
        response: {
          201: z.object({
            id: z.string(),
            name: z.string(),
            email: z.string().email(),
            document: z.string().max(14),
            street: z.string().max(255),
            number: z.string(),
            neighborhood: z.string().max(100),
            zipcode: z.string().max(8)
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email, document, neighborhood, street, zipcode, number } = request.body

      const [createdCustomer] = await createCustomer({
        id: crypto.randomUUID(),
        name,
        email,
        document,
        neighborhood,
        number,
        street,
        zipcode,
      });

      return reply.status(200).send(createdCustomer)
    }
  )
}
