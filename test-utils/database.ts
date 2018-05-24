import { exec } from 'child_process'
import { client as db } from '../src/database/client'
import { ID } from '../src/repositories/id'

export const deployTestDatabase = async () => new Promise((resolve) => {
    exec('scripts/deploy-test-db.sh', () => {
        return resolve()
    })
})

export const cleanUpTestDatabase = async () => new Promise((resolve) => {
    exec('scripts/reset-db.sh', () => {
        return resolve()
    })
})

export const commonQueries = {

    async createStory(message: string) {
        const result = await db.mutation.createStory({ data: { message } })
        await sleep(1000)
        return result
    },

    async getStory(id: ID) {
        return db.query.story({ where: { id }})
    },
}

const sleep = (ms: number) => new Promise((resolve) => {
    setTimeout(() => {
        return resolve()
    }, ms)
})
