//Main File
import express from 'express';
import {connection} from './db-connect';
const app = express();
const port = 8085;

app.get('/', (req, res) => {
  
  res.send("SERVER IS WORKING")
});

app.get('/posts', (req, res) => {
 connection.query("SELECT * FROM blog.posts", (err, result) => {
   if (err){
     return res.send(err);
   } else {
     return res.json({
       data: result
     });
   }
 });
});


app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});