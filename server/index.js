const pg = require("pg");
const express = require('express');
const app = express();
const cors = require('cors');
// const pool = require('./db');
const env = require("../env.json");
const Pool = pg.Pool;
const pool = new Pool(env);
pool.connect().then(function () {
  console.log(`Connected to database ${env.database}`);
});
app.use(cors());
app.use(express.json());
app.use(express.static("../react-ui/public"));
 
//
// add api routes here 

const validType = ["employer", "employee"];
const min = 3;
// create employee
app.post("signup", function (req, res){
    let body = req.body;
    if (
      body.username.length < min ||
      !validType.includes(body.type)
    ) {
      res.send();
      return res.status(400);
    }

    pool.query(
      "INSERT INTO users(name, username, password, type) VALUES($1, $2, $3) RETURNING *",
      [body.name, body.username, body.password, body.type]
  )
      .then(function (response) {
          console.log(response.rows);
          res.send();
          res.status(200);
      })
      .catch(function (error) {
          return res.status(500);
      });


})

// create task

// delete task

// etc...



app.listen(5000, () => {
  console.log("Server listening on port 5000");
});




// const isDev = process.env.NODE_ENV !== 'production';
// const PORT = process.env.PORT || 5000;

// // Multi-process to utilize all CPU cores.
// if (!isDev && cluster.isMaster) {
//   console.error(`Node cluster master ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
//   });

// } else {
//   const app = express();

//   // Priority serve any static files.
//   app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

//   // Answer API requests.
//   app.get('/api', function (req, res) {
//     res.set('Content-Type', 'application/json');
//     res.send('{"message":"Hello from the custom server!"}');
//   });

//   // All remaining requests return the React app, so it can handle routing.
//   app.get('*', function(request, response) {
//     response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
//   });

//   app.listen(PORT, function () {
//     console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
//   });
// }
