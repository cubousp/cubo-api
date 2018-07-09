/* tslint:disable */
import { client } from '../src/database/client'
import { ActivityCreateInput, ParticipantCreateInput } from '../src/database/generated/prisma'

const createActivity = (input: ActivityCreateInput) => client.mutation.createActivity({ data: input })

const createParticipant = (input: ParticipantCreateInput) => client.mutation.createParticipant({ data: input })

export const createParticipants = (inputs: ParticipantCreateInput[]) => inputs.forEach((input) => createParticipant(input))

export const createActivities = (inputs: ActivityCreateInput[]) => inputs.forEach((input) => createActivity(input))
