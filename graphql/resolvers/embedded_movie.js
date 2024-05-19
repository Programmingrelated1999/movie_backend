const EmbeddedMovie = require('../../models/Embedded_Movie');

const embeddedMovieResolvers = {
    Query: {
        getEmbeddedMovies: async () => {
            try {
                const embeddedMovies = await EmbeddedMovie.find();
                return embeddedMovies;
            } catch (error) {
                console.error('Error getting embedded movies:', error);
                throw new Error('Failed to get embedded movies');
            }
        },
        findEmbeddedMovieByTitle: async (_, { title }) => {
            try {
                const embeddedMovie = await EmbeddedMovie.findOne({ title });
                return embeddedMovie;
            } catch (error) {
                console.error('Error getting embedded movie by title:', error);
                throw new Error('Failed to get embedded movie by title');
            }
        }
    }
}

module.exports = embeddedMovieResolvers;