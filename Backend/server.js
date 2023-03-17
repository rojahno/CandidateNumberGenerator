import express from "express";
import fs from "fs";

import { generateCandidateNumbers, reset_used_list } from "./generate.js";
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

app.get("/api/create-new", (req, res) => {
  generateCandidateNumbers();
  reset_used_list();
  res.send("Generating candidate numbers and resetting used numbers");
});

app.get("/api/generete", (req, res) => {
  generateCandidateNumbers();
  res.send("Generating candidate numbers");
});

app.get("/api/get-number", (req, res) => {
  let candidateNumber = getCandidateNumber();
  res.send(candidateNumber);
});

app.get("/api/reset", (req, res) => {
  reset_used_list();
  res.send("resetting used numbers");
});

// app.get("/api/get-candidate-number", (req, res) => {
//   let candidateNumber = getRandomCandidateNumber();
//   res.send(candidateNumber);
// });

app.listen(8080, () => console.log("Example app is listening on port 8080."));
