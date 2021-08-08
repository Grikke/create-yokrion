require('dotenv').config()
const Kurtion = require("kurtion")({
    name: process.env.DB_NAME,
    location: process.env.DB_NAME
})

module.exports = Kurtion