import express, { Request, Response } from 'express';
import bodyParser from "body-parser";
import connectDB from "./database/connection";
import courseRoutes from "./router/router"
import cors from "cors";

const app = express();
const port = process.env.PORT;
app.use(cors());

connectDB();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use('/', courseRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
