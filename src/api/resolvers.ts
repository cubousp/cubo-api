import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'

const filePattern = `${__dirname}/**/*.resolver.ts`
const resolversArray = fileLoader(filePattern)

export default mergeResolvers(resolversArray)
