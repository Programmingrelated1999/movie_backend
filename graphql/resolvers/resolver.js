// Combine all resolvers

const userResolver = require('./user');
const theaterResolver = require('./theater');
const movieResolver = require('./movie');
const embeddedMovieResolver = require('./embedded_movie');

const combinedResolvers = {
    Query: {
        ...userResolver.Query,
        ...theaterResolver.Query,
        ...movieResolver.Query,
        ...embeddedMovieResolver.Query
    }
}

module.exports = combinedResolvers;