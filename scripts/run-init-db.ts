import { initDb } from "./init-db";

initDb().then(() => {
  console.log("Database initialized");
  process.exit(0);
}).catch((err) => {
  console.error("Database failed");
  process.exit(1);
});
