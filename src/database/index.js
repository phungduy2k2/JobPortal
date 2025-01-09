const { default: mongoose } = require("mongoose");

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let isConnected = false;

const connectToDB = async () => {
  if (isConnected) return;

  try {
    const connectionURL = process.env.MONGODB_URL;

    mongoose
      .connect(connectionURL, configOptions)
      .then(() => console.log("Job Portal database connection successfully"));

    isConnected = true;
  } catch (err) {
    console.log("Getting error from DB connection", err);

  }
};

export default connectToDB;
