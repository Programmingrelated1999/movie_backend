const Theater = require('../../models/Theater');

const theaterResolvers = {
    Query: {
        findTheaterById: async (_, { theaterId }) => {
            try {
                const theater = await Theater.findById(theaterId);
                return theater;
            } catch (error) {
                console.error('Error finding theater by id:', error);
                throw new Error('Failed to find theater by id');
            }
        },
        getTheaterAddress: async (_, { theaterId }) => {
            try {
                const theater = await Theater.findById( theaterId );
                return theater.location.address;
            } catch (error) {
                console.error('Error finding theater address:', error);
                throw new Error('Failed to find theater address');
            }
        }
    }
}

module.exports = theaterResolvers;
