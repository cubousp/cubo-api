import { exec } from 'child_process'
import { client as db } from '../src/database/client'

export const cleanUpDatabase = async () => new Promise((resolve) => {
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
}

const sleep = (ms: number) => new Promise((resolve) => {
    setTimeout(() => {
        return resolve()
    }, ms)
})
