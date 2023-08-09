import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("*", (req, res) => console.log(req));

app.listen(port);
