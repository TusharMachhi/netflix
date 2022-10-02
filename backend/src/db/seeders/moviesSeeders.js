import Movies from "../modal/movie.js";
import Users from "../modal/user.js"
import mongoose from "mongoose";
import path from "path";
import * as dotenv from "dotenv";
import * as fs from "fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "../../.env") });

mongoose.connect(process.env.MONGO_URL);

const movies = JSON.parse(
   fs.readFileSync(path.join(__dirname, "./seedersfile/movies.json")),"utf-8");

// const user = JSON.parse(
//     fs.readFileSync(path.join(__dirname, "./seedersfile/users.json")),
//    "utf-8"
//  );

//console.log(user);

const importData = async () => {
  await Movies.insertMany(movies);
  console.log("imported sucssefully");
  process.exit();
};

const deleteData = async () => {
  await Movies.deleteMany();
  console.log("deleted succesfully");
  process.exit();
};
if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
