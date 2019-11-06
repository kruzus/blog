//Main File
import { connection } from "./db-connect";
import express from "express";
const bodyParser = require('body-parser')
const app = express();
const port = 8000;

let cors = require("cors");
const corsPort = 3500;
app.use(cors());
app.listen(corsPort, function() {
  console.log(`CORS-enabled web server listening on port ${corsPort}`);
});

app.use(bodyParser.json());



app.post("/posts", function(req, res, next) {
  
var sql = "INSERT INTO `blogdb`.`posts` (`title`, `body`) VALUES ('"+req.body.title+"','"+req.body.body+"')";


connection.query(sql, function(err, result)  {
 if(err) throw err;
 console.log("table created");
 res.send("End request");
});
});





app.get("/", (req, res) => {
  res.send("Go to /post to see database");
});

// SELECT * FROM Customers
// ORDER BY CustomerID DESC


app.get("/posts", (req, res) => {
  connection.query("SELECT * FROM blogdb.posts ORDER BY id DESC", (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(result);
    }
  });
});








app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
