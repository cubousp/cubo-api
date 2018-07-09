import { client } from '../src/database/client'

const createActivity = (input) => client.mutation.createActivity(
    { data: input },
)

const createParticipant = (input) => client.mutation.createParticipant(
    { data: input },
)

export const createParticipants = (inputs: any[]) => inputs.forEach(
    (input) => createParticipant(input),
)

export const createActivities = (inputs: any[]) => inputs.forEach(
    (input) => createActivity(input),
)
