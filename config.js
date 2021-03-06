const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  nomicsKey: process.env.NOMICS_KEY,
  mongodbUser: process.env.MONGODB_USER,
  mongodbPassword: process.env.MONGODB_PASSWORD,
  mongodbURL: process.env.MONGODB_URL,
};
