const express = require("express");
const app = express();

require("dotenv").config()

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

//Handling routes
const phoneRoutes = require("./routes/phone.routes")
app.use("/phones",phoneRoutes)

//Handling errors, if the route doesn't exist or there are any errors.
require("./error-handling")(app);

module.exports = app;