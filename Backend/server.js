import express from "express";
import fs from "fs";

import { storeCandidateNumber } from "./generate.js";
import { getCandidateNumber } from "./fetch.js";

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.get("/api/generete", (req, res) => {
  storeCandidateNumber();
  res.send("Generating candidate numbers");
});
app.get("/api/get-number", (req, res) => {
  let candidateNumber = getCandidateNumber();
  res.send(candidateNumber);
});

// app.get("/api/get-candidate-number", (req, res) => {
//   let candidateNumber = getRandomCandidateNumber();
//   res.send(candidateNumber);
// });

app.listen(8080, () => console.log("Example app is listening on port 8080."));
