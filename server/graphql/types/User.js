import UserLevel from './UserLevel'
import Name from './Name'
import Conversation from './Conversation'

const User = `
type User {
  _id: ID!
  userLevel: UserLevel!
  username: String!
  password: String!
  conversations: [Conversation]
  name: Name!
}
`

export default () => [ User, Conversation, Name, UserLevel ]