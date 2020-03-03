import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

//IMPORTING ROUTES
import apsUsersRoutes from "./routes/apsUsers";

app.use(cors());
// MIDDLEWARES
app.use(morgan("dev"));
app.use(json());

//APS ROUTES
app.use("/api/apsUsers", apsUsersRoutes);

export default app;
