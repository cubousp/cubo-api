import { exec } from 'child_process'

export const cleanUpDatabase = async() => {
    await exec('prisma reset -e env/test.env -f')
}