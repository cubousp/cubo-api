import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    stories: <T = Story[]>(args: { where?: StoryWhereInput, orderBy?: StoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    activities: <T = Activity[]>(args: { where?: ActivityWhereInput, orderBy?: ActivityOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    speakers: <T = Speaker[]>(args: { where?: SpeakerWhereInput, orderBy?: SpeakerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    participants: <T = Participant[]>(args: { where?: ParticipantWhereInput, orderBy?: ParticipantOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    inscriptions: <T = Inscription[]>(args: { where?: InscriptionWhereInput, orderBy?: InscriptionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    story: <T = Story | null>(args: { where: StoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    activity: <T = Activity | null>(args: { where: ActivityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    speaker: <T = Speaker | null>(args: { where: SpeakerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    participant: <T = Participant | null>(args: { where: ParticipantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    inscription: <T = Inscription | null>(args: { where: InscriptionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    storiesConnection: <T = StoryConnection>(args: { where?: StoryWhereInput, orderBy?: StoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    activitiesConnection: <T = ActivityConnection>(args: { where?: ActivityWhereInput, orderBy?: ActivityOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    speakersConnection: <T = SpeakerConnection>(args: { where?: SpeakerWhereInput, orderBy?: SpeakerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    participantsConnection: <T = ParticipantConnection>(args: { where?: ParticipantWhereInput, orderBy?: ParticipantOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    inscriptionsConnection: <T = InscriptionConnection>(args: { where?: InscriptionWhereInput, orderBy?: InscriptionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createStory: <T = Story>(args: { data: StoryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createActivity: <T = Activity>(args: { data: ActivityCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSpeaker: <T = Speaker>(args: { data: SpeakerCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createParticipant: <T = Participant>(args: { data: ParticipantCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createInscription: <T = Inscription>(args: { data: InscriptionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateStory: <T = Story | null>(args: { data: StoryUpdateInput, where: StoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateActivity: <T = Activity | null>(args: { data: ActivityUpdateInput, where: ActivityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSpeaker: <T = Speaker | null>(args: { data: SpeakerUpdateInput, where: SpeakerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateParticipant: <T = Participant | null>(args: { data: ParticipantUpdateInput, where: ParticipantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateInscription: <T = Inscription | null>(args: { data: InscriptionUpdateInput, where: InscriptionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteStory: <T = Story | null>(args: { where: StoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteActivity: <T = Activity | null>(args: { where: ActivityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSpeaker: <T = Speaker | null>(args: { where: SpeakerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteParticipant: <T = Participant | null>(args: { where: ParticipantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteInscription: <T = Inscription | null>(args: { where: InscriptionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertStory: <T = Story>(args: { where: StoryWhereUniqueInput, create: StoryCreateInput, update: StoryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertActivity: <T = Activity>(args: { where: ActivityWhereUniqueInput, create: ActivityCreateInput, update: ActivityUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSpeaker: <T = Speaker>(args: { where: SpeakerWhereUniqueInput, create: SpeakerCreateInput, update: SpeakerUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertParticipant: <T = Participant>(args: { where: ParticipantWhereUniqueInput, create: ParticipantCreateInput, update: ParticipantUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertInscription: <T = Inscription>(args: { where: InscriptionWhereUniqueInput, create: InscriptionCreateInput, update: InscriptionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyStories: <T = BatchPayload>(args: { data: StoryUpdateInput, where?: StoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyActivities: <T = BatchPayload>(args: { data: ActivityUpdateInput, where?: ActivityWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySpeakers: <T = BatchPayload>(args: { data: SpeakerUpdateInput, where?: SpeakerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyParticipants: <T = BatchPayload>(args: { data: ParticipantUpdateInput, where?: ParticipantWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyInscriptions: <T = BatchPayload>(args: { data: InscriptionUpdateInput, where?: InscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyStories: <T = BatchPayload>(args: { where?: StoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyActivities: <T = BatchPayload>(args: { where?: ActivityWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySpeakers: <T = BatchPayload>(args: { where?: SpeakerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyParticipants: <T = BatchPayload>(args: { where?: ParticipantWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyInscriptions: <T = BatchPayload>(args: { where?: InscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    story: <T = StorySubscriptionPayload | null>(args: { where?: StorySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    activity: <T = ActivitySubscriptionPayload | null>(args: { where?: ActivitySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    speaker: <T = SpeakerSubscriptionPayload | null>(args: { where?: SpeakerSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    participant: <T = ParticipantSubscriptionPayload | null>(args: { where?: ParticipantSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    inscription: <T = InscriptionSubscriptionPayload | null>(args: { where?: InscriptionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Story: (where?: StoryWhereInput) => Promise<boolean>
  Activity: (where?: ActivityWhereInput) => Promise<boolean>
  Speaker: (where?: SpeakerWhereInput) => Promise<boolean>
  Participant: (where?: ParticipantWhereInput) => Promise<boolean>
  Inscription: (where?: InscriptionWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type Activity implements Node {
  id: ID!
  title: String!
  shortDescription: String
  longDescription: String
  startsAt: DateTime!
  endsAt: DateTime!
  internalComment: String
  speaker(where: SpeakerWhereInput): Speaker
  createdAt: DateTime!
  updatedAt: DateTime!
  inscriptionBeginsAt: DateTime
  inscriptionEndsAt: DateTime
  enrolled(where: InscriptionWhereInput, orderBy: InscriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Inscription!]
  vacancies: Int
}

"""A connection to a list of items."""
type ActivityConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ActivityEdge]!
  aggregate: AggregateActivity!
}

input ActivityCreateInput {
  title: String!
  shortDescription: String
  longDescription: String
  startsAt: DateTime!
  endsAt: DateTime!
  internalComment: String
  inscriptionBeginsAt: DateTime
  inscriptionEndsAt: DateTime
  vacancies: Int
  speaker: SpeakerCreateOneInput
  enrolled: InscriptionCreateManyWithoutActivityInput
}

input ActivityCreateOneWithoutEnrolledInput {
  create: ActivityCreateWithoutEnrolledInput
  connect: ActivityWhereUniqueInput
}

input ActivityCreateWithoutEnrolledInput {
  title: String!
  shortDescription: String
  longDescription: String
  startsAt: DateTime!
  endsAt: DateTime!
  internalComment: String
  inscriptionBeginsAt: DateTime
  inscriptionEndsAt: DateTime
  vacancies: Int
  speaker: SpeakerCreateOneInput
}

"""An edge in a connection."""
type ActivityEdge {
  """The item at the end of the edge."""
  node: Activity!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ActivityOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  shortDescription_ASC
  shortDescription_DESC
  longDescription_ASC
  longDescription_DESC
  startsAt_ASC
  startsAt_DESC
  endsAt_ASC
  endsAt_DESC
  internalComment_ASC
  internalComment_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  inscriptionBeginsAt_ASC
  inscriptionBeginsAt_DESC
  inscriptionEndsAt_ASC
  inscriptionEndsAt_DESC
  vacancies_ASC
  vacancies_DESC
}

type ActivityPreviousValues {
  id: ID!
  title: String!
  shortDescription: String
  longDescription: String
  startsAt: DateTime!
  endsAt: DateTime!
  internalComment: String
  createdAt: DateTime!
  updatedAt: DateTime!
  inscriptionBeginsAt: DateTime
  inscriptionEndsAt: DateTime
  vacancies: Int
}

type ActivitySubscriptionPayload {
  mutation: MutationType!
  node: Activity
  updatedFields: [String!]
  previousValues: ActivityPreviousValues
}

input ActivitySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ActivitySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ActivitySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ActivitySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ActivityWhereInput
}

input ActivityUpdateInput {
  title: String
  shortDescription: String
  longDescription: String
  startsAt: DateTime
  endsAt: DateTime
  internalComment: String
  inscriptionBeginsAt: DateTime
  inscriptionEndsAt: DateTime
  vacancies: Int
  speaker: SpeakerUpdateOneInput
  enrolled: InscriptionUpdateManyWithoutActivityInput
}

input ActivityUpdateOneWithoutEnrolledInput {
  create: ActivityCreateWithoutEnrolledInput
  connect: ActivityWhereUniqueInput
  delete: Boolean
  update: ActivityUpdateWithoutEnrolledDataInput
  upsert: ActivityUpsertWithoutEnrolledInput
}

input ActivityUpdateWithoutEnrolledDataInput {
  title: String
  shortDescription: String
  longDescription: String
  startsAt: DateTime
  endsAt: DateTime
  internalComment: String
  inscriptionBeginsAt: DateTime
  inscriptionEndsAt: DateTime
  vacancies: Int
  speaker: SpeakerUpdateOneInput
}

input ActivityUpsertWithoutEnrolledInput {
  update: ActivityUpdateWithoutEnrolledDataInput!
  create: ActivityCreateWithoutEnrolledInput!
}

input ActivityWhereInput {
  """Logical AND on all given filters."""
  AND: [ActivityWhereInput!]

  """Logical OR on all given filters."""
  OR: [ActivityWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ActivityWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  shortDescription: String

  """All values that are not equal to given value."""
  shortDescription_not: String

  """All values that are contained in given list."""
  shortDescription_in: [String!]

  """All values that are not contained in given list."""
  shortDescription_not_in: [String!]

  """All values less than the given value."""
  shortDescription_lt: String

  """All values less than or equal the given value."""
  shortDescription_lte: String

  """All values greater than the given value."""
  shortDescription_gt: String

  """All values greater than or equal the given value."""
  shortDescription_gte: String

  """All values containing the given string."""
  shortDescription_contains: String

  """All values not containing the given string."""
  shortDescription_not_contains: String

  """All values starting with the given string."""
  shortDescription_starts_with: String

  """All values not starting with the given string."""
  shortDescription_not_starts_with: String

  """All values ending with the given string."""
  shortDescription_ends_with: String

  """All values not ending with the given string."""
  shortDescription_not_ends_with: String
  longDescription: String

  """All values that are not equal to given value."""
  longDescription_not: String

  """All values that are contained in given list."""
  longDescription_in: [String!]

  """All values that are not contained in given list."""
  longDescription_not_in: [String!]

  """All values less than the given value."""
  longDescription_lt: String

  """All values less than or equal the given value."""
  longDescription_lte: String

  """All values greater than the given value."""
  longDescription_gt: String

  """All values greater than or equal the given value."""
  longDescription_gte: String

  """All values containing the given string."""
  longDescription_contains: String

  """All values not containing the given string."""
  longDescription_not_contains: String

  """All values starting with the given string."""
  longDescription_starts_with: String

  """All values not starting with the given string."""
  longDescription_not_starts_with: String

  """All values ending with the given string."""
  longDescription_ends_with: String

  """All values not ending with the given string."""
  longDescription_not_ends_with: String
  startsAt: DateTime

  """All values that are not equal to given value."""
  startsAt_not: DateTime

  """All values that are contained in given list."""
  startsAt_in: [DateTime!]

  """All values that are not contained in given list."""
  startsAt_not_in: [DateTime!]

  """All values less than the given value."""
  startsAt_lt: DateTime

  """All values less than or equal the given value."""
  startsAt_lte: DateTime

  """All values greater than the given value."""
  startsAt_gt: DateTime

  """All values greater than or equal the given value."""
  startsAt_gte: DateTime
  endsAt: DateTime

  """All values that are not equal to given value."""
  endsAt_not: DateTime

  """All values that are contained in given list."""
  endsAt_in: [DateTime!]

  """All values that are not contained in given list."""
  endsAt_not_in: [DateTime!]

  """All values less than the given value."""
  endsAt_lt: DateTime

  """All values less than or equal the given value."""
  endsAt_lte: DateTime

  """All values greater than the given value."""
  endsAt_gt: DateTime

  """All values greater than or equal the given value."""
  endsAt_gte: DateTime
  internalComment: String

  """All values that are not equal to given value."""
  internalComment_not: String

  """All values that are contained in given list."""
  internalComment_in: [String!]

  """All values that are not contained in given list."""
  internalComment_not_in: [String!]

  """All values less than the given value."""
  internalComment_lt: String

  """All values less than or equal the given value."""
  internalComment_lte: String

  """All values greater than the given value."""
  internalComment_gt: String

  """All values greater than or equal the given value."""
  internalComment_gte: String

  """All values containing the given string."""
  internalComment_contains: String

  """All values not containing the given string."""
  internalComment_not_contains: String

  """All values starting with the given string."""
  internalComment_starts_with: String

  """All values not starting with the given string."""
  internalComment_not_starts_with: String

  """All values ending with the given string."""
  internalComment_ends_with: String

  """All values not ending with the given string."""
  internalComment_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  inscriptionBeginsAt: DateTime

  """All values that are not equal to given value."""
  inscriptionBeginsAt_not: DateTime

  """All values that are contained in given list."""
  inscriptionBeginsAt_in: [DateTime!]

  """All values that are not contained in given list."""
  inscriptionBeginsAt_not_in: [DateTime!]

  """All values less than the given value."""
  inscriptionBeginsAt_lt: DateTime

  """All values less than or equal the given value."""
  inscriptionBeginsAt_lte: DateTime

  """All values greater than the given value."""
  inscriptionBeginsAt_gt: DateTime

  """All values greater than or equal the given value."""
  inscriptionBeginsAt_gte: DateTime
  inscriptionEndsAt: DateTime

  """All values that are not equal to given value."""
  inscriptionEndsAt_not: DateTime

  """All values that are contained in given list."""
  inscriptionEndsAt_in: [DateTime!]

  """All values that are not contained in given list."""
  inscriptionEndsAt_not_in: [DateTime!]

  """All values less than the given value."""
  inscriptionEndsAt_lt: DateTime

  """All values less than or equal the given value."""
  inscriptionEndsAt_lte: DateTime

  """All values greater than the given value."""
  inscriptionEndsAt_gt: DateTime

  """All values greater than or equal the given value."""
  inscriptionEndsAt_gte: DateTime
  vacancies: Int

  """All values that are not equal to given value."""
  vacancies_not: Int

  """All values that are contained in given list."""
  vacancies_in: [Int!]

  """All values that are not contained in given list."""
  vacancies_not_in: [Int!]

  """All values less than the given value."""
  vacancies_lt: Int

  """All values less than or equal the given value."""
  vacancies_lte: Int

  """All values greater than the given value."""
  vacancies_gt: Int

  """All values greater than or equal the given value."""
  vacancies_gte: Int
  speaker: SpeakerWhereInput
  enrolled_every: InscriptionWhereInput
  enrolled_some: InscriptionWhereInput
  enrolled_none: InscriptionWhereInput
}

input ActivityWhereUniqueInput {
  id: ID
}

type AggregateActivity {
  count: Int!
}

type AggregateInscription {
  count: Int!
}

type AggregateParticipant {
  count: Int!
}

type AggregateSpeaker {
  count: Int!
}

type AggregateStory {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Inscription implements Node {
  id: ID!
  activity(where: ActivityWhereInput): Activity!
  participant(where: ParticipantWhereInput): Participant!
  status: InscriptionStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type InscriptionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [InscriptionEdge]!
  aggregate: AggregateInscription!
}

input InscriptionCreateInput {
  status: InscriptionStatus
  activity: ActivityCreateOneWithoutEnrolledInput!
  participant: ParticipantCreateOneWithoutEnrolledInput!
}

input InscriptionCreateManyWithoutActivityInput {
  create: [InscriptionCreateWithoutActivityInput!]
  connect: [InscriptionWhereUniqueInput!]
}

input InscriptionCreateManyWithoutParticipantInput {
  create: [InscriptionCreateWithoutParticipantInput!]
  connect: [InscriptionWhereUniqueInput!]
}

input InscriptionCreateWithoutActivityInput {
  status: InscriptionStatus
  participant: ParticipantCreateOneWithoutEnrolledInput!
}

input InscriptionCreateWithoutParticipantInput {
  status: InscriptionStatus
  activity: ActivityCreateOneWithoutEnrolledInput!
}

"""An edge in a connection."""
type InscriptionEdge {
  """The item at the end of the edge."""
  node: Inscription!

  """A cursor for use in pagination."""
  cursor: String!
}

enum InscriptionOrderByInput {
  id_ASC
  id_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type InscriptionPreviousValues {
  id: ID!
  status: InscriptionStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
}

enum InscriptionStatus {
  PENDING
  CONFIRMED
  ATTENDED
  MISSED
}

type InscriptionSubscriptionPayload {
  mutation: MutationType!
  node: Inscription
  updatedFields: [String!]
  previousValues: InscriptionPreviousValues
}

input InscriptionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [InscriptionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [InscriptionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [InscriptionSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: InscriptionWhereInput
}

input InscriptionUpdateInput {
  status: InscriptionStatus
  activity: ActivityUpdateOneWithoutEnrolledInput
  participant: ParticipantUpdateOneWithoutEnrolledInput
}

input InscriptionUpdateManyWithoutActivityInput {
  create: [InscriptionCreateWithoutActivityInput!]
  connect: [InscriptionWhereUniqueInput!]
  disconnect: [InscriptionWhereUniqueInput!]
  delete: [InscriptionWhereUniqueInput!]
  update: [InscriptionUpdateWithWhereUniqueWithoutActivityInput!]
  upsert: [InscriptionUpsertWithWhereUniqueWithoutActivityInput!]
}

input InscriptionUpdateManyWithoutParticipantInput {
  create: [InscriptionCreateWithoutParticipantInput!]
  connect: [InscriptionWhereUniqueInput!]
  disconnect: [InscriptionWhereUniqueInput!]
  delete: [InscriptionWhereUniqueInput!]
  update: [InscriptionUpdateWithWhereUniqueWithoutParticipantInput!]
  upsert: [InscriptionUpsertWithWhereUniqueWithoutParticipantInput!]
}

input InscriptionUpdateWithoutActivityDataInput {
  status: InscriptionStatus
  participant: ParticipantUpdateOneWithoutEnrolledInput
}

input InscriptionUpdateWithoutParticipantDataInput {
  status: InscriptionStatus
  activity: ActivityUpdateOneWithoutEnrolledInput
}

input InscriptionUpdateWithWhereUniqueWithoutActivityInput {
  where: InscriptionWhereUniqueInput!
  data: InscriptionUpdateWithoutActivityDataInput!
}

input InscriptionUpdateWithWhereUniqueWithoutParticipantInput {
  where: InscriptionWhereUniqueInput!
  data: InscriptionUpdateWithoutParticipantDataInput!
}

input InscriptionUpsertWithWhereUniqueWithoutActivityInput {
  where: InscriptionWhereUniqueInput!
  update: InscriptionUpdateWithoutActivityDataInput!
  create: InscriptionCreateWithoutActivityInput!
}

input InscriptionUpsertWithWhereUniqueWithoutParticipantInput {
  where: InscriptionWhereUniqueInput!
  update: InscriptionUpdateWithoutParticipantDataInput!
  create: InscriptionCreateWithoutParticipantInput!
}

input InscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [InscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [InscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [InscriptionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  status: InscriptionStatus

  """All values that are not equal to given value."""
  status_not: InscriptionStatus

  """All values that are contained in given list."""
  status_in: [InscriptionStatus!]

  """All values that are not contained in given list."""
  status_not_in: [InscriptionStatus!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  activity: ActivityWhereInput
  participant: ParticipantWhereInput
}

input InscriptionWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createStory(data: StoryCreateInput!): Story!
  createActivity(data: ActivityCreateInput!): Activity!
  createSpeaker(data: SpeakerCreateInput!): Speaker!
  createParticipant(data: ParticipantCreateInput!): Participant!
  createInscription(data: InscriptionCreateInput!): Inscription!
  updateStory(data: StoryUpdateInput!, where: StoryWhereUniqueInput!): Story
  updateActivity(data: ActivityUpdateInput!, where: ActivityWhereUniqueInput!): Activity
  updateSpeaker(data: SpeakerUpdateInput!, where: SpeakerWhereUniqueInput!): Speaker
  updateParticipant(data: ParticipantUpdateInput!, where: ParticipantWhereUniqueInput!): Participant
  updateInscription(data: InscriptionUpdateInput!, where: InscriptionWhereUniqueInput!): Inscription
  deleteStory(where: StoryWhereUniqueInput!): Story
  deleteActivity(where: ActivityWhereUniqueInput!): Activity
  deleteSpeaker(where: SpeakerWhereUniqueInput!): Speaker
  deleteParticipant(where: ParticipantWhereUniqueInput!): Participant
  deleteInscription(where: InscriptionWhereUniqueInput!): Inscription
  upsertStory(where: StoryWhereUniqueInput!, create: StoryCreateInput!, update: StoryUpdateInput!): Story!
  upsertActivity(where: ActivityWhereUniqueInput!, create: ActivityCreateInput!, update: ActivityUpdateInput!): Activity!
  upsertSpeaker(where: SpeakerWhereUniqueInput!, create: SpeakerCreateInput!, update: SpeakerUpdateInput!): Speaker!
  upsertParticipant(where: ParticipantWhereUniqueInput!, create: ParticipantCreateInput!, update: ParticipantUpdateInput!): Participant!
  upsertInscription(where: InscriptionWhereUniqueInput!, create: InscriptionCreateInput!, update: InscriptionUpdateInput!): Inscription!
  updateManyStories(data: StoryUpdateInput!, where: StoryWhereInput): BatchPayload!
  updateManyActivities(data: ActivityUpdateInput!, where: ActivityWhereInput): BatchPayload!
  updateManySpeakers(data: SpeakerUpdateInput!, where: SpeakerWhereInput): BatchPayload!
  updateManyParticipants(data: ParticipantUpdateInput!, where: ParticipantWhereInput): BatchPayload!
  updateManyInscriptions(data: InscriptionUpdateInput!, where: InscriptionWhereInput): BatchPayload!
  deleteManyStories(where: StoryWhereInput): BatchPayload!
  deleteManyActivities(where: ActivityWhereInput): BatchPayload!
  deleteManySpeakers(where: SpeakerWhereInput): BatchPayload!
  deleteManyParticipants(where: ParticipantWhereInput): BatchPayload!
  deleteManyInscriptions(where: InscriptionWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Participant implements Node {
  id: ID!
  name: String!
  enrolled(where: InscriptionWhereInput, orderBy: InscriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Inscription!]
}

"""A connection to a list of items."""
type ParticipantConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ParticipantEdge]!
  aggregate: AggregateParticipant!
}

input ParticipantCreateInput {
  name: String!
  enrolled: InscriptionCreateManyWithoutParticipantInput
}

input ParticipantCreateOneWithoutEnrolledInput {
  create: ParticipantCreateWithoutEnrolledInput
  connect: ParticipantWhereUniqueInput
}

input ParticipantCreateWithoutEnrolledInput {
  name: String!
}

"""An edge in a connection."""
type ParticipantEdge {
  """The item at the end of the edge."""
  node: Participant!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ParticipantOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ParticipantPreviousValues {
  id: ID!
  name: String!
}

type ParticipantSubscriptionPayload {
  mutation: MutationType!
  node: Participant
  updatedFields: [String!]
  previousValues: ParticipantPreviousValues
}

input ParticipantSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ParticipantSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ParticipantSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ParticipantSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ParticipantWhereInput
}

input ParticipantUpdateInput {
  name: String
  enrolled: InscriptionUpdateManyWithoutParticipantInput
}

input ParticipantUpdateOneWithoutEnrolledInput {
  create: ParticipantCreateWithoutEnrolledInput
  connect: ParticipantWhereUniqueInput
  delete: Boolean
  update: ParticipantUpdateWithoutEnrolledDataInput
  upsert: ParticipantUpsertWithoutEnrolledInput
}

input ParticipantUpdateWithoutEnrolledDataInput {
  name: String
}

input ParticipantUpsertWithoutEnrolledInput {
  update: ParticipantUpdateWithoutEnrolledDataInput!
  create: ParticipantCreateWithoutEnrolledInput!
}

input ParticipantWhereInput {
  """Logical AND on all given filters."""
  AND: [ParticipantWhereInput!]

  """Logical OR on all given filters."""
  OR: [ParticipantWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ParticipantWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  enrolled_every: InscriptionWhereInput
  enrolled_some: InscriptionWhereInput
  enrolled_none: InscriptionWhereInput
}

input ParticipantWhereUniqueInput {
  id: ID
}

type Query {
  stories(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Story]!
  activities(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Activity]!
  speakers(where: SpeakerWhereInput, orderBy: SpeakerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Speaker]!
  participants(where: ParticipantWhereInput, orderBy: ParticipantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Participant]!
  inscriptions(where: InscriptionWhereInput, orderBy: InscriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Inscription]!
  story(where: StoryWhereUniqueInput!): Story
  activity(where: ActivityWhereUniqueInput!): Activity
  speaker(where: SpeakerWhereUniqueInput!): Speaker
  participant(where: ParticipantWhereUniqueInput!): Participant
  inscription(where: InscriptionWhereUniqueInput!): Inscription
  storiesConnection(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StoryConnection!
  activitiesConnection(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivityConnection!
  speakersConnection(where: SpeakerWhereInput, orderBy: SpeakerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SpeakerConnection!
  participantsConnection(where: ParticipantWhereInput, orderBy: ParticipantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ParticipantConnection!
  inscriptionsConnection(where: InscriptionWhereInput, orderBy: InscriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InscriptionConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Speaker implements Node {
  id: ID!
  name: String!
  picture: String
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type SpeakerConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SpeakerEdge]!
  aggregate: AggregateSpeaker!
}

input SpeakerCreateInput {
  name: String!
  picture: String
  description: String
}

input SpeakerCreateOneInput {
  create: SpeakerCreateInput
  connect: SpeakerWhereUniqueInput
}

"""An edge in a connection."""
type SpeakerEdge {
  """The item at the end of the edge."""
  node: Speaker!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SpeakerOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  picture_ASC
  picture_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SpeakerPreviousValues {
  id: ID!
  name: String!
  picture: String
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SpeakerSubscriptionPayload {
  mutation: MutationType!
  node: Speaker
  updatedFields: [String!]
  previousValues: SpeakerPreviousValues
}

input SpeakerSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SpeakerSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SpeakerSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SpeakerSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SpeakerWhereInput
}

input SpeakerUpdateDataInput {
  name: String
  picture: String
  description: String
}

input SpeakerUpdateInput {
  name: String
  picture: String
  description: String
}

input SpeakerUpdateOneInput {
  create: SpeakerCreateInput
  connect: SpeakerWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: SpeakerUpdateDataInput
  upsert: SpeakerUpsertNestedInput
}

input SpeakerUpsertNestedInput {
  update: SpeakerUpdateDataInput!
  create: SpeakerCreateInput!
}

input SpeakerWhereInput {
  """Logical AND on all given filters."""
  AND: [SpeakerWhereInput!]

  """Logical OR on all given filters."""
  OR: [SpeakerWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SpeakerWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  picture: String

  """All values that are not equal to given value."""
  picture_not: String

  """All values that are contained in given list."""
  picture_in: [String!]

  """All values that are not contained in given list."""
  picture_not_in: [String!]

  """All values less than the given value."""
  picture_lt: String

  """All values less than or equal the given value."""
  picture_lte: String

  """All values greater than the given value."""
  picture_gt: String

  """All values greater than or equal the given value."""
  picture_gte: String

  """All values containing the given string."""
  picture_contains: String

  """All values not containing the given string."""
  picture_not_contains: String

  """All values starting with the given string."""
  picture_starts_with: String

  """All values not starting with the given string."""
  picture_not_starts_with: String

  """All values ending with the given string."""
  picture_ends_with: String

  """All values not ending with the given string."""
  picture_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

input SpeakerWhereUniqueInput {
  id: ID
}

type Story implements Node {
  id: ID!
  message: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type StoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [StoryEdge]!
  aggregate: AggregateStory!
}

input StoryCreateInput {
  message: String!
}

"""An edge in a connection."""
type StoryEdge {
  """The item at the end of the edge."""
  node: Story!

  """A cursor for use in pagination."""
  cursor: String!
}

enum StoryOrderByInput {
  id_ASC
  id_DESC
  message_ASC
  message_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StoryPreviousValues {
  id: ID!
  message: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type StorySubscriptionPayload {
  mutation: MutationType!
  node: Story
  updatedFields: [String!]
  previousValues: StoryPreviousValues
}

input StorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [StorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [StorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StorySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: StoryWhereInput
}

input StoryUpdateInput {
  message: String
}

input StoryWhereInput {
  """Logical AND on all given filters."""
  AND: [StoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [StoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StoryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

input StoryWhereUniqueInput {
  id: ID
}

type Subscription {
  story(where: StorySubscriptionWhereInput): StorySubscriptionPayload
  activity(where: ActivitySubscriptionWhereInput): ActivitySubscriptionPayload
  speaker(where: SpeakerSubscriptionWhereInput): SpeakerSubscriptionPayload
  participant(where: ParticipantSubscriptionWhereInput): ParticipantSubscriptionPayload
  inscription(where: InscriptionSubscriptionWhereInput): InscriptionSubscriptionPayload
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type InscriptionStatus =   'PENDING' |
  'CONFIRMED' |
  'ATTENDED' |
  'MISSED'

export type ActivityOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'shortDescription_ASC' |
  'shortDescription_DESC' |
  'longDescription_ASC' |
  'longDescription_DESC' |
  'startsAt_ASC' |
  'startsAt_DESC' |
  'endsAt_ASC' |
  'endsAt_DESC' |
  'internalComment_ASC' |
  'internalComment_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'inscriptionBeginsAt_ASC' |
  'inscriptionBeginsAt_DESC' |
  'inscriptionEndsAt_ASC' |
  'inscriptionEndsAt_DESC' |
  'vacancies_ASC' |
  'vacancies_DESC'

export type InscriptionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'status_ASC' |
  'status_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type SpeakerOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'picture_ASC' |
  'picture_DESC' |
  'description_ASC' |
  'description_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type StoryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'message_ASC' |
  'message_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type ParticipantOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface InscriptionCreateWithoutActivityInput {
  status?: InscriptionStatus
  participant: ParticipantCreateOneWithoutEnrolledInput
}

export interface StoryWhereInput {
  AND?: StoryWhereInput[] | StoryWhereInput
  OR?: StoryWhereInput[] | StoryWhereInput
  NOT?: StoryWhereInput[] | StoryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  message?: String
  message_not?: String
  message_in?: String[] | String
  message_not_in?: String[] | String
  message_lt?: String
  message_lte?: String
  message_gt?: String
  message_gte?: String
  message_contains?: String
  message_not_contains?: String
  message_starts_with?: String
  message_not_starts_with?: String
  message_ends_with?: String
  message_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
}

export interface InscriptionCreateWithoutParticipantInput {
  status?: InscriptionStatus
  activity: ActivityCreateOneWithoutEnrolledInput
}

export interface SpeakerWhereInput {
  AND?: SpeakerWhereInput[] | SpeakerWhereInput
  OR?: SpeakerWhereInput[] | SpeakerWhereInput
  NOT?: SpeakerWhereInput[] | SpeakerWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  picture?: String
  picture_not?: String
  picture_in?: String[] | String
  picture_not_in?: String[] | String
  picture_lt?: String
  picture_lte?: String
  picture_gt?: String
  picture_gte?: String
  picture_contains?: String
  picture_not_contains?: String
  picture_starts_with?: String
  picture_not_starts_with?: String
  picture_ends_with?: String
  picture_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
}

export interface ActivityCreateOneWithoutEnrolledInput {
  create?: ActivityCreateWithoutEnrolledInput
  connect?: ActivityWhereUniqueInput
}

export interface ActivityWhereInput {
  AND?: ActivityWhereInput[] | ActivityWhereInput
  OR?: ActivityWhereInput[] | ActivityWhereInput
  NOT?: ActivityWhereInput[] | ActivityWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  shortDescription?: String
  shortDescription_not?: String
  shortDescription_in?: String[] | String
  shortDescription_not_in?: String[] | String
  shortDescription_lt?: String
  shortDescription_lte?: String
  shortDescription_gt?: String
  shortDescription_gte?: String
  shortDescription_contains?: String
  shortDescription_not_contains?: String
  shortDescription_starts_with?: String
  shortDescription_not_starts_with?: String
  shortDescription_ends_with?: String
  shortDescription_not_ends_with?: String
  longDescription?: String
  longDescription_not?: String
  longDescription_in?: String[] | String
  longDescription_not_in?: String[] | String
  longDescription_lt?: String
  longDescription_lte?: String
  longDescription_gt?: String
  longDescription_gte?: String
  longDescription_contains?: String
  longDescription_not_contains?: String
  longDescription_starts_with?: String
  longDescription_not_starts_with?: String
  longDescription_ends_with?: String
  longDescription_not_ends_with?: String
  startsAt?: DateTime
  startsAt_not?: DateTime
  startsAt_in?: DateTime[] | DateTime
  startsAt_not_in?: DateTime[] | DateTime
  startsAt_lt?: DateTime
  startsAt_lte?: DateTime
  startsAt_gt?: DateTime
  startsAt_gte?: DateTime
  endsAt?: DateTime
  endsAt_not?: DateTime
  endsAt_in?: DateTime[] | DateTime
  endsAt_not_in?: DateTime[] | DateTime
  endsAt_lt?: DateTime
  endsAt_lte?: DateTime
  endsAt_gt?: DateTime
  endsAt_gte?: DateTime
  internalComment?: String
  internalComment_not?: String
  internalComment_in?: String[] | String
  internalComment_not_in?: String[] | String
  internalComment_lt?: String
  internalComment_lte?: String
  internalComment_gt?: String
  internalComment_gte?: String
  internalComment_contains?: String
  internalComment_not_contains?: String
  internalComment_starts_with?: String
  internalComment_not_starts_with?: String
  internalComment_ends_with?: String
  internalComment_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  inscriptionBeginsAt?: DateTime
  inscriptionBeginsAt_not?: DateTime
  inscriptionBeginsAt_in?: DateTime[] | DateTime
  inscriptionBeginsAt_not_in?: DateTime[] | DateTime
  inscriptionBeginsAt_lt?: DateTime
  inscriptionBeginsAt_lte?: DateTime
  inscriptionBeginsAt_gt?: DateTime
  inscriptionBeginsAt_gte?: DateTime
  inscriptionEndsAt?: DateTime
  inscriptionEndsAt_not?: DateTime
  inscriptionEndsAt_in?: DateTime[] | DateTime
  inscriptionEndsAt_not_in?: DateTime[] | DateTime
  inscriptionEndsAt_lt?: DateTime
  inscriptionEndsAt_lte?: DateTime
  inscriptionEndsAt_gt?: DateTime
  inscriptionEndsAt_gte?: DateTime
  vacancies?: Int
  vacancies_not?: Int
  vacancies_in?: Int[] | Int
  vacancies_not_in?: Int[] | Int
  vacancies_lt?: Int
  vacancies_lte?: Int
  vacancies_gt?: Int
  vacancies_gte?: Int
  speaker?: SpeakerWhereInput
  enrolled_every?: InscriptionWhereInput
  enrolled_some?: InscriptionWhereInput
  enrolled_none?: InscriptionWhereInput
}

export interface ParticipantUpsertWithoutEnrolledInput {
  update: ParticipantUpdateWithoutEnrolledDataInput
  create: ParticipantCreateWithoutEnrolledInput
}

export interface ActivityUpdateInput {
  title?: String
  shortDescription?: String
  longDescription?: String
  startsAt?: DateTime
  endsAt?: DateTime
  internalComment?: String
  inscriptionBeginsAt?: DateTime
  inscriptionEndsAt?: DateTime
  vacancies?: Int
  speaker?: SpeakerUpdateOneInput
  enrolled?: InscriptionUpdateManyWithoutActivityInput
}

export interface ParticipantUpdateWithoutEnrolledDataInput {
  name?: String
}

export interface ActivityCreateWithoutEnrolledInput {
  title: String
  shortDescription?: String
  longDescription?: String
  startsAt: DateTime
  endsAt: DateTime
  internalComment?: String
  inscriptionBeginsAt?: DateTime
  inscriptionEndsAt?: DateTime
  vacancies?: Int
  speaker?: SpeakerCreateOneInput
}

export interface ParticipantUpdateOneWithoutEnrolledInput {
  create?: ParticipantCreateWithoutEnrolledInput
  connect?: ParticipantWhereUniqueInput
  delete?: Boolean
  update?: ParticipantUpdateWithoutEnrolledDataInput
  upsert?: ParticipantUpsertWithoutEnrolledInput
}

export interface ParticipantSubscriptionWhereInput {
  AND?: ParticipantSubscriptionWhereInput[] | ParticipantSubscriptionWhereInput
  OR?: ParticipantSubscriptionWhereInput[] | ParticipantSubscriptionWhereInput
  NOT?: ParticipantSubscriptionWhereInput[] | ParticipantSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ParticipantWhereInput
}

export interface InscriptionUpdateWithoutActivityDataInput {
  status?: InscriptionStatus
  participant?: ParticipantUpdateOneWithoutEnrolledInput
}

export interface ActivitySubscriptionWhereInput {
  AND?: ActivitySubscriptionWhereInput[] | ActivitySubscriptionWhereInput
  OR?: ActivitySubscriptionWhereInput[] | ActivitySubscriptionWhereInput
  NOT?: ActivitySubscriptionWhereInput[] | ActivitySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ActivityWhereInput
}

export interface InscriptionUpdateWithWhereUniqueWithoutActivityInput {
  where: InscriptionWhereUniqueInput
  data: InscriptionUpdateWithoutActivityDataInput
}

export interface InscriptionUpdateInput {
  status?: InscriptionStatus
  activity?: ActivityUpdateOneWithoutEnrolledInput
  participant?: ParticipantUpdateOneWithoutEnrolledInput
}

export interface InscriptionUpdateManyWithoutActivityInput {
  create?: InscriptionCreateWithoutActivityInput[] | InscriptionCreateWithoutActivityInput
  connect?: InscriptionWhereUniqueInput[] | InscriptionWhereUniqueInput
  disconnect?: InscriptionWhereUniqueInput[] | InscriptionWhereUniqueInput
  delete?: InscriptionWhereUniqueInput[] | InscriptionWhereUniqueInput
  update?: InscriptionUpdateWithWhereUniqueWithoutActivityInput[] | InscriptionUpdateWithWhereUniqueWithoutActivityInput
  upsert?: InscriptionUpsertWithWhereUniqueWithoutActivityInput[] | InscriptionUpsertWithWhereUniqueWithoutActivityInput
}

export interface ActivityWhereUniqueInput {
  id?: ID_Input
}

export interface SpeakerUpsertNestedInput {
  update: SpeakerUpdateDataInput
  create: SpeakerCreateInput
}

export interface ParticipantWhereUniqueInput {
  id?: ID_Input
}

export interface StoryCreateInput {
  message: String
}

export interface InscriptionUpsertWithWhereUniqueWithoutParticipantInput {
  where: InscriptionWhereUniqueInput
  update: InscriptionUpdateWithoutParticipantDataInput
  create: InscriptionCreateWithoutParticipantInput
}

export interface ActivityCreateInput {
  title: String
  shortDescription?: String
  longDescription?: String
  startsAt: DateTime
  endsAt: DateTime
  internalComment?: String
  inscriptionBeginsAt?: DateTime
  inscriptionEndsAt?: DateTime
  vacancies?: Int
  speaker?: SpeakerCreateOneInput
  enrolled?: InscriptionCreateManyWithoutActivityInput
}

export interface ActivityUpdateWithoutEnrolledDataInput {
  title?: String
  shortDescription?: String
  longDescription?: String
  startsAt?: DateTime
  endsAt?: DateTime
  internalComment?: String
  inscriptionBeginsAt?: DateTime
  inscriptionEndsAt?: DateTime
  vacancies?: Int
  speaker?: SpeakerUpdateOneInput
}

export interface SpeakerCreateOneInput {
  create?: SpeakerCreateInput
  connect?: SpeakerWhereUniqueInput
}

export interface InscriptionUpdateWithoutParticipantDataInput {
  status?: InscriptionStatus
  activity?: ActivityUpdateOneWithoutEnrolledInput
}

export interface SpeakerCreateInput {
  name: String
  picture?: String
  description?: String
}

export interface InscriptionUpdateManyWithoutParticipantInput {
  create?: InscriptionCreateWithoutParticipantInput[] | InscriptionCreateWithoutParticipantInput
  connect?: InscriptionWhereUniqueInput[] | InscriptionWhereUniqueInput
  disconnect?: InscriptionWhereUniqueInput[] | InscriptionWhereUniqueInput
  delete?: InscriptionWhereUniqueInput[] | InscriptionWhereUniqueInput
  update?: InscriptionUpdateWithWhereUniqueWithoutParticipantInput[] | InscriptionUpdateWithWhereUniqueWithoutParticipantInput
  upsert?: InscriptionUpsertWithWhereUniqueWithoutParticipantInput[] | InscriptionUpsertWithWhereUniqueWithoutParticipantInput
}

export interface InscriptionCreateManyWithoutActivityInput {
  create?: InscriptionCreateWithoutActivityInput[] | InscriptionCreateWithoutActivityInput
  connect?: InscriptionWhereUniqueInput[] | InscriptionWhereUniqueInput
}

export interface SpeakerUpdateInput {
  name?: String
  picture?: String
  description?: String
}

export interface SpeakerUpdateDataInput {
  name?: String
  picture?: String
  description?: String
}

export interface InscriptionSubscriptionWhereInput {
  AND?: InscriptionSubscriptionWhereInput[] | InscriptionSubscriptionWhereInput
  OR?: InscriptionSubscriptionWhereInput[] | InscriptionSubscriptionWhereInput
  NOT?: InscriptionSubscriptionWhereInput[] | InscriptionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: InscriptionWhereInput
}

export interface ParticipantCreateOneWithoutEnrolledInput {
  create?: ParticipantCreateWithoutEnrolledInput
  connect?: ParticipantWhereUniqueInput
}

export interface StorySubscriptionWhereInput {
  AND?: StorySubscriptionWhereInput[] | StorySubscriptionWhereInput
  OR?: StorySubscriptionWhereInput[] | StorySubscriptionWhereInput
  NOT?: StorySubscriptionWhereInput[] | StorySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: StoryWhereInput
}

export interface ParticipantCreateWithoutEnrolledInput {
  name: String
}

export interface SpeakerWhereUniqueInput {
  id?: ID_Input
}

export interface ParticipantCreateInput {
  name: String
  enrolled?: InscriptionCreateManyWithoutParticipantInput
}

export interface ActivityUpsertWithoutEnrolledInput {
  update: ActivityUpdateWithoutEnrolledDataInput
  create: ActivityCreateWithoutEnrolledInput
}

export interface InscriptionCreateManyWithoutParticipantInput {
  create?: InscriptionCreateWithoutParticipantInput[] | InscriptionCreateWithoutParticipantInput
  connect?: InscriptionWhereUniqueInput[] | InscriptionWhereUniqueInput
}

export interface InscriptionUpdateWithWhereUniqueWithoutParticipantInput {
  where: InscriptionWhereUniqueInput
  data: InscriptionUpdateWithoutParticipantDataInput
}

export interface InscriptionWhereInput {
  AND?: InscriptionWhereInput[] | InscriptionWhereInput
  OR?: InscriptionWhereInput[] | InscriptionWhereInput
  NOT?: InscriptionWhereInput[] | InscriptionWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  status?: InscriptionStatus
  status_not?: InscriptionStatus
  status_in?: InscriptionStatus[] | InscriptionStatus
  status_not_in?: InscriptionStatus[] | InscriptionStatus
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  activity?: ActivityWhereInput
  participant?: ParticipantWhereInput
}

export interface InscriptionUpsertWithWhereUniqueWithoutActivityInput {
  where: InscriptionWhereUniqueInput
  update: InscriptionUpdateWithoutActivityDataInput
  create: InscriptionCreateWithoutActivityInput
}

export interface StoryWhereUniqueInput {
  id?: ID_Input
}

export interface StoryUpdateInput {
  message?: String
}

export interface InscriptionCreateInput {
  status?: InscriptionStatus
  activity: ActivityCreateOneWithoutEnrolledInput
  participant: ParticipantCreateOneWithoutEnrolledInput
}

export interface SpeakerUpdateOneInput {
  create?: SpeakerCreateInput
  connect?: SpeakerWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: SpeakerUpdateDataInput
  upsert?: SpeakerUpsertNestedInput
}

export interface ParticipantWhereInput {
  AND?: ParticipantWhereInput[] | ParticipantWhereInput
  OR?: ParticipantWhereInput[] | ParticipantWhereInput
  NOT?: ParticipantWhereInput[] | ParticipantWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  enrolled_every?: InscriptionWhereInput
  enrolled_some?: InscriptionWhereInput
  enrolled_none?: InscriptionWhereInput
}

export interface InscriptionWhereUniqueInput {
  id?: ID_Input
}

export interface SpeakerSubscriptionWhereInput {
  AND?: SpeakerSubscriptionWhereInput[] | SpeakerSubscriptionWhereInput
  OR?: SpeakerSubscriptionWhereInput[] | SpeakerSubscriptionWhereInput
  NOT?: SpeakerSubscriptionWhereInput[] | SpeakerSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SpeakerWhereInput
}

export interface ParticipantUpdateInput {
  name?: String
  enrolled?: InscriptionUpdateManyWithoutParticipantInput
}

export interface ActivityUpdateOneWithoutEnrolledInput {
  create?: ActivityCreateWithoutEnrolledInput
  connect?: ActivityWhereUniqueInput
  delete?: Boolean
  update?: ActivityUpdateWithoutEnrolledDataInput
  upsert?: ActivityUpsertWithoutEnrolledInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface InscriptionPreviousValues {
  id: ID_Output
  status: InscriptionStatus
  createdAt: DateTime
  updatedAt: DateTime
}

export interface Activity extends Node {
  id: ID_Output
  title: String
  shortDescription?: String
  longDescription?: String
  startsAt: DateTime
  endsAt: DateTime
  internalComment?: String
  speaker?: Speaker
  createdAt: DateTime
  updatedAt: DateTime
  inscriptionBeginsAt?: DateTime
  inscriptionEndsAt?: DateTime
  enrolled?: Inscription[]
  vacancies?: Int
}

export interface BatchPayload {
  count: Long
}

export interface AggregateInscription {
  count: Int
}

export interface Speaker extends Node {
  id: ID_Output
  name: String
  picture?: String
  description?: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface Story extends Node {
  id: ID_Output
  message: String
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface InscriptionEdge {
  node: Inscription
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface InscriptionConnection {
  pageInfo: PageInfo
  edges: InscriptionEdge[]
  aggregate: AggregateInscription
}

export interface AggregateParticipant {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface ParticipantConnection {
  pageInfo: PageInfo
  edges: ParticipantEdge[]
  aggregate: AggregateParticipant
}

export interface ParticipantPreviousValues {
  id: ID_Output
  name: String
}

/*
 * An edge in a connection.

 */
export interface SpeakerEdge {
  node: Speaker
  cursor: String
}

export interface ParticipantSubscriptionPayload {
  mutation: MutationType
  node?: Participant
  updatedFields?: String[]
  previousValues?: ParticipantPreviousValues
}

export interface AggregateActivity {
  count: Int
}

export interface StorySubscriptionPayload {
  mutation: MutationType
  node?: Story
  updatedFields?: String[]
  previousValues?: StoryPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ActivityConnection {
  pageInfo: PageInfo
  edges: ActivityEdge[]
  aggregate: AggregateActivity
}

export interface StoryPreviousValues {
  id: ID_Output
  message: String
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface StoryEdge {
  node: Story
  cursor: String
}

export interface Participant extends Node {
  id: ID_Output
  name: String
  enrolled?: Inscription[]
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface ActivitySubscriptionPayload {
  mutation: MutationType
  node?: Activity
  updatedFields?: String[]
  previousValues?: ActivityPreviousValues
}

/*
 * An edge in a connection.

 */
export interface ParticipantEdge {
  node: Participant
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface SpeakerConnection {
  pageInfo: PageInfo
  edges: SpeakerEdge[]
  aggregate: AggregateSpeaker
}

export interface SpeakerPreviousValues {
  id: ID_Output
  name: String
  picture?: String
  description?: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface SpeakerSubscriptionPayload {
  mutation: MutationType
  node?: Speaker
  updatedFields?: String[]
  previousValues?: SpeakerPreviousValues
}

export interface Inscription extends Node {
  id: ID_Output
  activity: Activity
  participant: Participant
  status: InscriptionStatus
  createdAt: DateTime
  updatedAt: DateTime
}

export interface ActivityPreviousValues {
  id: ID_Output
  title: String
  shortDescription?: String
  longDescription?: String
  startsAt: DateTime
  endsAt: DateTime
  internalComment?: String
  createdAt: DateTime
  updatedAt: DateTime
  inscriptionBeginsAt?: DateTime
  inscriptionEndsAt?: DateTime
  vacancies?: Int
}

/*
 * An edge in a connection.

 */
export interface ActivityEdge {
  node: Activity
  cursor: String
}

export interface AggregateSpeaker {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface StoryConnection {
  pageInfo: PageInfo
  edges: StoryEdge[]
  aggregate: AggregateStory
}

export interface InscriptionSubscriptionPayload {
  mutation: MutationType
  node?: Inscription
  updatedFields?: String[]
  previousValues?: InscriptionPreviousValues
}

export interface AggregateStory {
  count: Int
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

export type DateTime = Date | string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string