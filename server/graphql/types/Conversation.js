import User from './User'
import Message from './Message'

const Conversation = `
type Conversation {
  _id: ID!
  host: User!
  included: [User!]!
  name: String
  messages: [Message]
}
`

export default () => [Conversation, User, Message]