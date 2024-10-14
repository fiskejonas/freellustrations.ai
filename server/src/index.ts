import express from "express";
import "dotenv/config";
import cors from "cors"
import init from "./init/init";

const app = express();
app.use(cors());
app.use(express.json());

//setup database
init(app)

app.get("/", (req, res) => {
    res.send("Hello World!!");
  });
  
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });