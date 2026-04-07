/**
 * @copyright 2026 HamidRehman
 * @license Apache-2.0
 *
 */

import express from "express";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import config from "./config/index";

import type { CorsOptions } from "cors";

const app = express();

const corsOption: CorsOptions = {
  origin(requestOrigin, callback) {
    if (
      config.NODE_ENV === "development" ||
      !requestOrigin ||
      config.WHITELIST_ORIGINS.includes(requestOrigin)
    ) {
      callback(null, true);
    } else {
      callback(
        new Error(`Cors Error ${requestOrigin} is not allowed by CORS.`),
        false,
      );
    }
  },
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(helmet());

app.use(
  compression({
    threshold: 1024,
  }),
);

app.listen(config.PORT, () => {
  console.log(`Server running: http://localhost:${config.PORT}`);
});
