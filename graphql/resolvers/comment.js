const Comment = require('../../models/Comment');
const Movie = require('../../models/Movie');

const commentResolvers = {
    Query: {
        findCommentById: async(parent, arg) => {
            try {
                const comment = await Comment.findById( arg.commentId );
                return comment;
            } catch (error) {
                console.error('Error finding comment by id:', error);
                throw new Error('Failed to find comment by id');
            }
        },
        findMovieByCommentId: async(parent, arg) => {
            try {
                const comment = await Comment.findById(arg.commentId);
                const movie = await Movie.findById(comment.movie_id );
                return movie;
            } catch (error) {
                console.error('Error finding movie title by comment id:', error);
                throw new Error('Failed to find movie title by comment id');
            }
        },
    }
}

module.exports = commentResolvers;

//5a9427648b0beebeb6957b89