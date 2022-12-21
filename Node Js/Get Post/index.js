const express = require('express');
var cors = require('cors')
const app = express();
const port = 3000;
app.use(express.json()); 
app.use(cors())

app.get('/sensor1', (req, res) => {
   res.send({suhu:25});
});

app.post('/sensor2', (req, res) => {
     var d = req.body;
     console.log(req.body.suhu)
     res.send("Data Yang Terkirim Adalah " + req.body.suhu);
   });
  
 app.listen(port, () => {
   console.log(`cli-nodejs-api listening at http://localhost:${port}`)
 });