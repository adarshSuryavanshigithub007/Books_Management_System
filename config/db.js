const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongoose connected ${mongoose.connection.host}`.bgBlue.white)
    } catch (error) {
        console.log(`mongoose server issue ${error}`.bgRed.white)
    }
}

module.exports = connectDB