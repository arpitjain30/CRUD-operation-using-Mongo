import express from "express";
import connect from "./Connection/Connection.js";
import Router from "./Router/Router.js"

const app = express();
const PORT = 8080;
app.use(express.json());

connect(`mongodb://127.0.0.1:27017/User`);
app.use('/user', Router);

app.listen(PORT, () => {console.log(`Server is running on PORT ${PORT}`);})