const pg = require("pg");
const express = require('express');
const bcrypt = require("bcrypt");
const app = express();
const cors = require('cors');
// const pool = require('./db');
const saltRounds = 10;
const env = require("../env.json");
const Pool = pg.Pool;
const pool = new Pool(env);
pool.connect().then(function () {
  console.log(`Connected to database ${env.database}`);
});
app.use(cors());
app.use(express.json());
app.use(express.static("../react-ui/public"));
 
let port = 5000;
let hostname = "localhost";

//
// add api routes here  z

const min = 3;

// login
app.get("/login", function (req, res) {

// add api routes here 
const min = 3;

// login 
app.post("/login", function (req, res) {

  let body = req.body;
  let { type } = req.query;
  console.log(body);
  if (type != 'employee' || type != 'employer') {
    res.send();
    return res.status(500);
  }

  // not sure how to do username and password validation
  pool.query("SELECT * FROM users WHERE type = $1 AND username = $2", 
  [type, body.username]
  )
    .then(function (response) {
      console.log(response.rows);
      res.status(200).send();
    })
    .catch(function (error) {
        console.log(error);
        res.status(500).send();
    });
})

// create employee
app.post("/signup", function (req, res) {
    let body = req.body;
    console.log(body)
    console.log("testing")
    if (
      body.username.length < min
    ) {
      res.send();
      return res.status(400);
    }
          pool.query(
            "INSERT INTO users (name, username, password, type) VALUES($1, $2, $3, $4)",
            [body.name, body.username, body.password, body.type]
          )
              .then(function (response) {
                  console.log(response.rows)
                  res.status(200).send();
              })
              .catch(function (error) {
                  console.log(error);
                  res.status(500).send(); 
              });
})

//view tasks
  
app.post("/usertasks", function (req, res){
  let name = mark;
    pool.query("SELECT * FROM tasks WHERE name = $1" , [name])
            .then(function (response) {
                console.log(responce,rows);
                res.json({ rows: response.rows });
            })
            .catch(function (error) {
                res.sendStatus(500);
            });
});
    
app.post("/view", function (req, res){
    pool.query("SELECT * FROM tasks")
              .then(function (response) {
                  console.log(response.rows)
                  res.status(200).send();
              })
              .catch(function (error) {
                  console.log(error);
                  res.status(500).send();
              });
})

// etc...



app.listen(port, hostname, () => {
  console.log("Server listening on port 5000");
});
