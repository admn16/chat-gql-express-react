import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import schema from './graphql/index'

const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/gql', graphiqlExpress({endpointURL: '/graphql'}))

app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'))