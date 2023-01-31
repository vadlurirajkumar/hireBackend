import mongoose from "mongoose";
// mongoose.set("strictQuery", true); //^ just for mongoDB warning

// const DBconnection = async () => {
//   try {
//     const { connection } = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`DB Connected : ${connection.host}`.cyan.underline);
//   } catch (error) {
//     console.log(`Error is : ${error.message}`.red.bold);
//     process.exit(1);
//   }
// };

// const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const DBconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("db is connected");
  } catch (err) {
    console.log(err);
  }
};
export { DBconnection };
