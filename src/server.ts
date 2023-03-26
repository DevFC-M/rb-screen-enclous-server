import express from "express";
import { Storage } from "@google-cloud/storage";

let projectId = "";
let keyFilename = ""; // A definir

const storage = new Storage({
  projectId,
  keyFilename,
});
const bucket = storage.bucket("definir"); // A definir

const app = express();

app.get("/services", (request, response) => {
  return response.json([
    { id: 1, name: "case" },
    { id: 2, name: "screen" },
    { id: 1, name: "case" },
    { id: 1, name: "case" },
  ]);
});

app.listen(3333, () => {
  console.log("Server Started");
});
