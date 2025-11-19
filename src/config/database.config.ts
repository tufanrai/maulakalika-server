import mongoose from "mongoose";

const dbConfig = (uri: string) => {
  mongoose
    .connect(uri)
    .then(() => console.log("successfuly connected to the database 💾"))
    .catch((err) => console.log(err));
};

export default dbConfig;
