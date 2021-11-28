
import express from "express";
import path from "path";
import { Routes } from "./routes"

const port = 3000;
const app = express();

app.use(express.json());

app.use("/", express.static(path.join(__dirname, "..", "public")));

Routes.register(app)

app.listen(port, () => {     
    console.log( `server started at http://localhost:${port}`);
});