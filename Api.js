const express = require('express')
const app = express()

app.post('/', function (req, res) {
  res.send('Hello World from Jinnah Hostel! So we have Successfully Installed nodemon')
})
app.get('/hitPoint1', function (req, res) {
    res.send('Hello World from hitPoint1')
})
app.get('/hitPoint2', function (req, res) {
    res.send('Hello World from hitPoint2')
})
app.listen(3000,function(){
    console.log("Server is Running");
})

console.log("this code is running");