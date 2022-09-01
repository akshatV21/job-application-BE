const { default: mongoose } = require("mongoose")
const CONFIG = require("./config/config")
const CONTENTS = require("./contents")

const connectToMongo = async () => {
  await mongoose.connect(CONFIG.MONGO_URL)
}

mongoose.connection.on("connected", () => console.log(CONTENTS.MONGO_CONN_SUCCESS_MSG))

// mongoose error
mongoose.connection.on("error", err => {
  throw new Error("error connecing to mongo!!")
})

module.exports = { connectToMongo }
