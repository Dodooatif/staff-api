const mongoose = require("mongoose")

const connectDb = async () => {
    await mongoose.connect(process.env.DB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    console.log(`connected to database successfully`)
}

module.exports = connectDb;