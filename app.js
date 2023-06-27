import express from "express"
import dot from "dotenv"
dot.config();
const app = express();
import { router } from "./src/routes/index.js"
import { customError } from "./src/middleware/ErrorHandler.js";

const port = process.env.PORT || 8200;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
app.listen(port, () => console.log(`Server is Listening on Port:- ${port}`));
app.use(customError);