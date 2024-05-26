require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.dev',
});
const cors = require('cors');

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
});

// Defined ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// Start the Server
// Configure CORS options
const corsOptions = {
  origin: '*', // Allow all origins. For production, specify your allowed origins.
  credentials: true,
};

// Start The Server
startStandaloneServer(server, {
        listen: { port: process.env.PORT, host: process.env.DEV }, context: ({ req, res }) => ({ req, res }), cors: corsOptions,
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})