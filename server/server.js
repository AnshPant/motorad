const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const dbConfig=require('./config/dbConfig');
const usersRoute =require("./routes/usersRoute");
const examsRoute =require("./routes/examsRoute");
const resportsRoute = require("./routes/reportsRoute");


app.use("/api/users", usersRoute);
app.use("/api/exams", examsRoute);
app.use("/api/reports", resportsRoute);

app.post('/register', (req, res) => {
  
  const { message } = req.body;
  console.log(message);
  // Respond with a message
  res.send({ message: `Server message: ${message}` });
});


const port = process.env.PORT || 5000;

// deployment config
const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
