const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//Route files
const hospitals = require("./routes/hospitals");

dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

const app = express();

//Add body parser
app.use(express.json());

//Mount routers
app.use("/api/v1/hospitals", hospitals);

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
})