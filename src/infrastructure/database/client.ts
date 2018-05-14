import { Prisma } from './generated/prisma'

export const client = new Prisma({
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
})