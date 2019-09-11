const express = require('express');
const path = require('path');

const app = express();

// Serve the React App
app.use(express.static(path.join(__dirname, 'client/build')));
var returned_data = 'hello world'
// An api endpoint that returns the data stored from the webhook api endpoint
app.get('/getdata', (req,res) => {
    res.json(returned_data);
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

//Handles webhook requests and stores the latest request in the returned_data varriable
app.post('/webhook'), (req,res) => {
  returned_data = req.data
  console.log(returned_data);
  res.sendStatus(200)
}
const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
