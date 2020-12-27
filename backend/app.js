const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const recipeRoutes = require('./routes/recipes');
const authRoutes = require("./routes/auth");

const app = express();



mongoose.connect('mongodb+srv://milan:1Gdj6G10TcesfBHe@cluster0.gakx8.mongodb.net/kitchen-db', { useNewUrlParser: true })
    .then(()=> {
        console.log('Connected to database');
    })
    .catch(()=> {
        console.log('Connection failed!');
    })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

  app.use('/api/recipes', recipeRoutes);
  app.use('/api/user', authRoutes);


module.exports = app;
