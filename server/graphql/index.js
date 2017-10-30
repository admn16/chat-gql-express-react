import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'

import UserType from './types/User'
import ConversationType from './types/Conversation'

const RootQuery = `
type Query {
  userById(id: ID!): User!
  user: User
  conversations: [Conversation]!
}`

const SchemaDefinition = `
schema {
  query: Query
}
`

const resolvers = {
  Query: {
    user() {
      return 'world'
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    RootQuery,

    UserType,
    ConversationType,
  ],
  resolvers
})

addMockFunctionsToSchema({ schema })

export default schema