import { fileLoader, mergeTypes } from 'merge-graphql-schemas'

const filePattern = `${__dirname}/**/*.graphql`
const types = fileLoader(filePattern, { recursive: true })

export default mergeTypes(types, { all: true })
