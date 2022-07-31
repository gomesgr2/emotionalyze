import server from "./server";
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
