import LoggerA from "./loggerA";
import LoggerB from "./loggerB";
import TLogLevel from "./TLogLevel";
import { performance } from "node:perf_hooks";

const logger = new LoggerB(TLogLevel.Verbose);

const t0 = performance.now();
for (let i = 0; i < 1e6; i++) {
  logger.warn("I need to say something");
}
const t1 = performance.now();

console.log(`\n\n\n\nTOTAL DURATION ${t1 - t0}ms`);
