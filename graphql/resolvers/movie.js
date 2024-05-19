const Movie = require('../../models/Movie');

const movieResolvers = {
    Query: {
        getMovies: async () => {
            try {
                const movies = await Movie.find();
                return movies;
            } catch (error) {
                console.error('Error getting movies:', error);
                throw new Error('Failed to get movies');
            }
        },
        findMovieById: async (_, { movieId }) => {
            try {
                const movie = await Movie.findOne({ movieId });
                return movie;
            } catch (error) {
                console.error('Error getting movie by id:', error);
                throw new Error('Failed to get movie by id');
            }
        },
        findMovieByTitle: async (_, { title }) => {
            try {
                const movie = await Movie.findOne({ title });
                return movie;
            } catch (error) {
                console.error('Error getting movie by title:', error);
                throw new Error('Failed to get movie by title');
            }
        }
    }
}

module.exports = movieResolvers;
