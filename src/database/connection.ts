import * as mongoose from "mongoose";
export const ConnectDB = async (MONGO_URI) => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Database Connected!`);
  } catch (err) {
    console.error(err.message);
  }
};
