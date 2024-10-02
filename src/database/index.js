const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
    const connectionURL = "mongodb+srv://phungvanduy10a4:duyphungvank65hust@cluster0.1sdgo.mongodb.net/";

    mongoose.connect(connectionURL)
    .then(()=> console.log('Job Portal database connection successfully'))
    .catch(e=> console.log(e));
}

export default connectToDB;
