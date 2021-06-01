const pg = require("pg");
const express = require('express');
const bcrypt = require("bcrypt");
const app = express();
const cors = require('cors');
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
let testingname = "";
const min = 3;

// login

app.post("/login", async (req, res) => {
    let body = req.body;
    console.log(body);
    console.log("HIT LOGIN ROUTE");
    testingname = body.name;
    try{
        const Tasks = await pool.query("SELECT * FROM users WHERE username = $1", [body.username])
        console.log(Tasks.rows);
        res.json(Tasks.rows);
        res.status(200);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send();
    }
})

// add api routes here

// create employee
app.post("/signup", function (req, res) {
    let body = req.body;
    console.log(testingname);
    console.log(body);
    console.log(body.type);

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
})
    
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



app.listen(port, hostname, () => {
  console.log("Server listening on port 5000");
});
