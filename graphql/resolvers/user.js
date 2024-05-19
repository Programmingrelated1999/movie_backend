const User = require('../../models/User');

const userResolvers = {
    Query: {
        findUserByEmail: async (_, { email }) => {
            try {
                const user = await User.findOne({ email });
                return user;
            } catch (error) {
                console.error('Error finding user by email:', error);
                throw new Error('Failed to find user by email');
            }
        },
        findUsersCount: async () => {
            try {
                const users = await User.find();
                return users.length;
            } catch (error) {
                console.error('Error finding users count:', error);
                throw new Error('Failed to find users count');
            }
        },
        findUserByName: async(parent, arg) => {
            try{
                const user = await User.findOne({name: arg.name});
                return user;
            } catch (error) {
                console.error('Error finding user by name:', error);
                throw new Error('Failed to find user by name');
            }
        }
    }
}

module.exports = userResolvers;
