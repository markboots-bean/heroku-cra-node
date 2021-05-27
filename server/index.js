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
 
// add api routes here 

const validType = ["employer", "employee"];
const min = 3;

// login 
app.get("/login", function (req, res) {
  let body = req.body;
  let { type } = req.query;
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
      res.send();
      res.status(200);
    })
    .catch(function (error) {
        return res.sendStatus(500);
    });
})

// create employee

app.post("/signup", function (req, res){
    let body = req.body;
    if (
      body.username != "" ||
      body.username.length < min ||
      !validType.includes(body.type)
    ) {
      res.send();
      return res.status(400);
    }

      bcrypt
      .hash(body.password, saltRounds)
      .then(function (hashedPassword) {
          pool.query(
            "INSERT INTO users (name, username, password, type) VALUES($1, $2, $3, $4)",
            [body.name, body.username, hashedPassword, body.type]
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

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
