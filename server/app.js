const express = require("express");
const app = express();
const cors = require("cors");
const apiRouter = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const swaggerUI = require("swagger-ui-express");
const swaggerJSON = require("./docs/API.json");
const PORT = process.env.PORT || 4000;

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(errorHandler);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));

/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
