//Imports
const express = require('express')
const path = require('path')
const app = express()
// Establishing the port
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/resources'));

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'resources','index.html'))
})

// Executing the server on given port number
app.listen(PORT, console.log(
    `Server started on port ${PORT}`));