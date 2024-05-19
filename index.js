require('dotenv').config();

// Import ApollaServer And Defined TypeDefs And Resolvers
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers/resolver');

// Import Mongoose
const {mongoose} = require('mongoose');

// Establish A Connection To MongoDB
const conn = mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
.then(async () => {
  console.log('Connected to MongoDB');
})

// Defined ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// Start The Server
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})