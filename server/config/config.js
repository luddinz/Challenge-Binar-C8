require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME_DEV || "postgres",
    password: process.env.DB_PASSWORD_DEV || "P@ssw0rd21",
    database: process.env.DB_DEV || "ch8-challenge_development",
    host: "localhost",
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME_TEST || "postgres",
    password: process.env.DB_PASSWORD_TEST || "P@ssw0rd21",
    database: process.env.DB_TEST || "ch8-challenge_test",
    host: "localhost",
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME_PROD || "postgres",
    password: process.env.DB_PASSWORD_PROD || "P@ssw0rd21",
    database: process.env.DB_PROD || "ch8-challenge_production",
    host: "localhost",
    dialect: "postgres",
  },
};
