import * as mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/CampuseQuera");
    console.log(`Database Connected!`);
  } catch (err) {
    console.error(err.message);
  }
};
