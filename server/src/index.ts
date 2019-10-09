//Main File
import express from 'express';
import {connection} from './db-connect';
const app = express();
const port = 8000;


var cors = require('cors')

 
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

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