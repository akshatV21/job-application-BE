require("dotenv").config()

const CONFIG = {}

CONFIG.MONGO_URL = process.env.MONGO_URL
CONFIG.PORT = process.env.PORT

module.exports = CONFIG
