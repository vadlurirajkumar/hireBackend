import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const DBconnection = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (typeof uri !== "string") {
      throw new Error(
        `The 'uri' parameter to 'openUri()' must be a string, got "${typeof uri}". Make sure the first parameter to 'mongoose.connect()' or 'mongoose.createConnection()' is a string.`
      );
    }
    const { connection } = await mongoose.connect(uri);
    console.log(`DB Connected : ${connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error is : ${error.message}`.red.bold);
    process.exit(1);
  }
};
export { DBconnection };
