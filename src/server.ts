import express from "express";
import { Storage } from "@google-cloud/storage";
import cors from "cors";
import path from "path";

let projectId = "myprojecttest-381603";
let keyFilename = "mykey.json"; // A definir

const storage = new Storage({
  projectId,
  keyFilename,
});
const bucketGalery = "rb-test-example"; // A definir
const bucketServices = "rb-servicestest";

const app = express();

app.use(cors());

app.get("/pullImages", async (request, response) => {
  const [files] = await storage.bucket(bucketGalery).getFiles();

  return response.json(files);
});

app.get("/services", async (request, response) => {
  const [services] = await storage.bucket(bucketServices).getFiles();

  return response.json(services)
});

app.listen(3333, () => {
  console.log("Server Started");
});
