import cors from "cors";
import express from "express";
import routes from "./routes/heroes-routes.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use("/api/heroes", routes);

app.listen(PORT, () => console.log(`Running app in port: ${PORT}`));
