const app = require("./app")
const CONFIG = require("./config/config")
const CONTENTS = require("./contents")
const { connectToMongo } = require("./mongo")

const PORT = CONFIG.PORT || 8080

const startServer = async () => {
  await connectToMongo()
  app.listen(PORT, () => console.log(CONTENTS.SERVER_START_MSG(PORT)))
}

startServer()
