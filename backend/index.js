import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();
const port = 3030;

app.use(cors({credentials:true,origin:`http://localhost:${port}`}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(port, () =>{console.log(`Server Runnin at port http://localhost:${port}`)})