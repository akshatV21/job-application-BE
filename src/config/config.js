require("dotenv").config()

const CONFIG = {}

CONFIG.MONGO_URL = process.env.MONGO_URL
CONFIG.PORT = process.env.PORT
CONFIG.JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

module.exports = CONFIG
