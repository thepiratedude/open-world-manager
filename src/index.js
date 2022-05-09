/* Name: Open World Manager
Author: The Pirate Dude
Version: 0.0.1
First version was created by TPD using
https://medium.com/codex/building-a-simple-crud-app-with-node-js-express-js-and-mongodb-6e96d13edae7
*/

/*The “require” keyword is used to import 
modules into our program code. 
This is the old format though. 
In the new versions, we can use the “import” keyword.
*/
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const url = "mongodb://localhost:27017";
mongoose.connect(url,{useNewUrlParser: true});
const con = mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: " + error);
}

const port=9000;

app.listen(port, () =>{
    console.log('Server started');
})