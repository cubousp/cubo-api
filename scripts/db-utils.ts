import { client } from '../src/database/client'

const createActivity = (input) => client.mutation.createActivity(
    { data: input },
)

export const createActivities = (inputs: any[]) => inputs.forEach(
    (input) => createActivity(input),
)
