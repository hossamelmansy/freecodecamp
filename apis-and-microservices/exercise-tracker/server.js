const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const cors = require('cors')

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/exercise-track')
const ExerciseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, default: new Date() }
});
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  exercises: [ExerciseSchema]
});
const User = mongoose.model("users", UserSchema);

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


// Not found middleware
app.use((req, res, next) => {
  return next({status: 404, message: 'not found'})
});

// Error Handling middleware
app.use((err, req, res, next) => {
  let errCode, errMessage

  if (err.errors) {
    // mongoose validation error
    errCode = 400 // bad request
    const keys = Object.keys(err.errors)
    // report the first validation error
    errMessage = err.errors[keys[0]].message
  } else {
    // generic or custom error
    errCode = err.status || 500
    errMessage = err.message || 'Internal Server Error'
  }
  res.status(errCode).type('txt')
    .send(errMessage)
});

app.post("/api/exercise/new-user", async function (req, res) {
  let { username } = req.body;
  let user = await User.create({ username });
  
  return res.send(user);
});

app.get("/api/exercise/users", async function (req, user) {
  return await User.find({}).exec();
});

app.post("/api/exercise/add", async function (req, res) {
  let { userId, description, duration, date } = req.body;
  
  let user = await User.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(userId) }, 
    { $push: { exercises: { description, duration, date } }  },
    { new: true });
  
  return res.send(user);
});

app.get("/api/exercise/log?{userId}[&from][&to][&limit]", async function (req, res) {
  let { userId, from, to, limit } = req.query;
  let { username, exercises } = await User.findById(userId);
  
  if (from && to) {
    exercises = exercises.filter(function (exercise) {
      return exercise.date >= from && exercise.date <= to;
    });
  }
  if (limit) {
    exercises = exercises.slice(0, limit);
  }
  
  return res.json({ username: username, exercises: exercises, count: exercises.length });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
