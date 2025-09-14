const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'logoswayatt.png'));
});

app.get("/msg",(req,res)=>{
  res.send("Hello from the Participants")
});

app.use("/reply",(req,res)=>{
  res.send("Checking for the purpose of the deployment on aws and cloud not for futher use.")
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});