const mongoose = require("mongoose");

const connectionString = process.env.MONGO_URI;
const connectionOptions = {};

mongoose.set("strictQuery", true);

const connectToDatabase = () => {
  mongoose
    .connect(connectionString, connectionOptions)
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => console.log(error));
};

module.exports = connectToDatabase;
