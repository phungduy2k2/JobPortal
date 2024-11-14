const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
    const connectionURL = process.env.MONGODB_URL;

    mongoose.connect(connectionURL)
    .then(()=> console.log('Job Portal database connection successfully'))
    .catch(e=> console.log(e));
}

export default connectToDB;
