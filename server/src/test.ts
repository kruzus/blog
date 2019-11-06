//Main File
import { connection } from "./db-connect";
import express from "express";
const bodyParser = require('body-parser')
const app = express();
const port = 8000;

let cors = require("cors");
const corsPort = 3500;


app.post("/posts", function(req, res, next) {
    console.log(req.body.name);
    console.log(req.body.title);
    connection.connect(function(err) {
  if (err) throw  err;
  console.log("connected");
  var sql = "INSERT INTO `blogdb`.`posts` (`title`, `body`) VALUES ('"+req.body.title+"','"+req.body.body+"',)";
  
  
  connection.query(sql, function(err, result)  {
   if(err) throw err;
   console.log("table created");
  });
  });})

