import bodyParser from "body-parser";
import express from "express";
import routes from "./routes";
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(routes);

export default app;
