import { User } from "../database/models/Users";

export const resolvers = {
  Query: {
    getUser: async (parent, args, context) => {
      const { userId } = args;
      try {
        const user = await User.findById(userId);
        return user;
      } catch (err) {
        console.error(err.message);
      }
    },

    getAllUsers: async (parent, args, context) => {
      try {
        const users = await User.find();
        return users;
      } catch (err) {
        console.error(err.message);
      }
      return null;
    },
  },

  Mutation: {
    createUser: async (parent, args, context) => {
      const { name, email, password, profilePic, department, branch, batch } =
        args;
      try {
        const user = await User.create({
          name,
          email,
          password,
          profilePic,
          department,
          branch,
          batch,
        });
        return user;
      } catch (err) {
        console.error(err.message);
      }
      return null;
    },
  },
};
