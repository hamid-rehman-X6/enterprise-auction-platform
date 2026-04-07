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

import type { CorsOptions } from "cors";

const PORT = 8080;

const app = express();

// const corsOption: CorsOptions = {};

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
