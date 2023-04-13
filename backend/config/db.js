const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const colors = require('colors')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`mongodb connected: ${conn.connection.host}`.blue.underline)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = connectDB
