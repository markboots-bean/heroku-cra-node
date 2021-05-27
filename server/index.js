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
let fuck = "";
//
// add api routes here  z

const min = 3;

<<<<<<< HEAD
// login 
=======
// login
>>>>>>> aeca204ed12083e9760d3e7b3688d8825a730a65
app.get("/login", function (req, res) {
  let body = req.body;
  console.log(body);
  fuck = body.username;
  // not sure how to do username and password validation
  pool.query("SELECT * FROM users WHERE username = $1", 
  [body.username]
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
    console.log(body);
    console.log(fuck);
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
                  console.log(response.rows);
                  res.status(200).send();
              })
              .catch(function (error) {
                  console.log(error);
                  res.status(500).send(); 
              });
<<<<<<< HEAD
      })
      .catch(function (error) {
          console.log(error);
          res.status(500).send(); 
      });
})

// add task
/*
app.post("/add", function (req, res){
    let body = req.body;
    if (
      body.name != "" ||
      body.name.length < min
    ) {
      res.send();
      return res.status(400);
    }
      .then(function (body) {
          pool.query(
            "INSERT INTO tasks (name, description) VALUES($1, $2)",
            [body.name, body.description]
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
      .catch(function (error) {
          console.log(error);
          res.status(500).send();
      });
*/
// delete task
    /*
app.post("/delete", function (req, res){
    let body = req.body;
    if (body.name != "") {
      res.send();
      return res.status(400);
    }.then(function (body) {
          pool.query(
            "DELETE FROM tasks WHERE description = $1", [body.description]
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
      .catch(function (error) {
          console.log(error);
          res.status(500).send();
      });
=======
>>>>>>> aeca204ed12083e9760d3e7b3688d8825a730a65
})
*/
//view all employee tasks
  
app.get("/view", async (req, res) => {
    try{
        const Tasks = await pool.query("SELECT * FROM tasks")
        res.json(Tasks.rows);
        res.status(200);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send();
    }
})
    
// etc...

<<<<<<< HEAD
app.listen(5000, () => {
=======


app.listen(port, hostname, () => {
>>>>>>> aeca204ed12083e9760d3e7b3688d8825a730a65
  console.log("Server listening on port 5000");
});
