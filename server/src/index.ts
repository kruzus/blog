//Main File
import express from 'express';
import {connection} from './db-connect';
const app = express();
const port = 8000;


let cors = require('cors')
const corsPort = 3500;
app.use(cors())
app.listen(corsPort, function () {
  console.log(`CORS-enabled web server listening on port ${corsPort}`)
})

app.get('/', (req, res) => {
  
  res.send("Go to /post to see database");
});

app.get('/posts', (req, res) => {
 connection.query("SELECT * FROM blogDB.posts", (err, result) => {
   if (err){
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