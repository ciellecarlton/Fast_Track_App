const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const mongojs = require("mongojs");
const path = require("path")
const db = require("./models");

const app = express();

const PORT = 3000;

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workouts_db";
const collections = ["workouts"];

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true , useFindAndModify : false});

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// Routes
app.use(require("./routes/api"))
app.use(require("./routes/view"))


app.listen(process.env.PORT || 3000, () => {
    console.log("app is listening" + PORT);
  })

  
  // //===IMPORT NPM PACKAGES====================================
// const express = require('express');
// const path = require('path');
// const mongoose = require('mongoose');
// const db = require('./models');
// const { on } = require('process');
// const app = express();

// //===SETTING UP THE PORT=================================
// const PORT = process.env.PORT || 3000;

// //===STATIC DIRECTORY===================================
// app.use(express.static(path.join(__dirname, 'public')))

// //===DATA PARSING===========================================
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())


// //===HTML ROUTES======================================
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/public/index.html'))
// })

// app.get('/exercise', (req, res) => {
//   res.sendFile(path.join(__dirname + '/public/exercise.html'))
// })

// app.get('/stats', (req, res) => {
//   res.sendFile(path.join(__dirname + '/public/stats.html'))
// })

// app.post("/api/workouts", (req, res) => {
//   db.Workout.create(req.body)
//     .then(dbWorkouts => {
//       res.json(dbWorkouts);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     })
// })

// //===API ROUTES=================================================
// app.put("/api/workouts/:id", ({ body, params }, res) => {
//   console.log(body);
//   console.log(params.id);
//   db.Workout.findByIdAndUpdate(params.id, {$push: {exercises: body}})
//   .then(dbWorkouts => {
//     res.json(dbWorkouts);
//   })
//   .catch(err => {
//     res.status(400).json(err);
//   })
// });

// app.get("/api/workouts", (req, res) => {
//   db.Workout.find({})
//   .then(dbWorkouts => {
//     res.json(dbWorkouts);
//   })
//   .catch(err => {
//     res.status(400).json(err);
//   })
// });

// app.get("/api/workouts/range", (req, res) => {
//   db.Workout.find({})
//   .then(dbWorkouts => {
//     res.json(dbWorkouts);
//   })
//   .catch(err => {
//     res.status(400).json(err);
//   })
// });

// app.delete("/api/workouts", ({ body }, res) => {

// })




// //===CONNECTING TO MONGODB======================================
// mongoose.connect('mongodb://localhost/workout', 
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// })
// mongoose.connection.once('open', function(){
//   console.log('Connected to the database!');
// }).on('error', function(error){
//   console.log('Connection error:', error)
// })
 
  
// //===STARTING OUR EXPRESS APP===============================
// app.listen(PORT, () =>{
//   console.log(`App listening on http://localhost:${PORT}`)
// })