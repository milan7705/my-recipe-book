const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Recipe = require('./models/recipe');

const app = express();

mongoose.connect('mongodb+srv://milan:1Gdj6G10TcesfBHe@cluster0.gakx8.mongodb.net/kitchen-db?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(()=> {
        console.log('Connected to database');
    })
    .catch(()=> {
        console.log('Connection failed!');
    }) 
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE"
    );
    next();
  });

  //POST
  app.post('/api/recipes',(req, res, next)=> {  
    const recipe = new Recipe({
        title: req.body.title,
        description: req.body.description
    });
    recipe.save().then(createdRecipe => {
        res.status(201).json({
            message: 'Recipes added succesfully!',
            recipeId: createdRecipe._id
        });
    });
  });    
//PUT
app.put('/api/recipes/:id',(req, res, next)=> {
    const recipe = new Recipe({
        _id: req.body.id,
        title: req.body.title,
        description: req.body.description
    });
    Recipe.updateOne({_id: req.params.id}, recipe)
        .then(result => {
            console.log(result);
            res.status(200).json(
                { 
                    message: 'Update successful!'
                });
        });
}); 

//GET
app.get('/api/recipes',(req, res, next)=> {
    Recipe.find().then(documents => {
        res.status(200).json(
            {
                message: 'Recipes fetch succesfully',
                recipes: documents
            }
        );
        });
});

app.get('/api/recipes/:id',(req, res, next)=> {
    Recipe.findById(req.params.id)
        .then(recipe => {
            if(recipe) {
                res.status(200).json(recipe);

            } else {
                res.status(404).json({ message: 'Recipe not found!'});
            }
        })
});

//DELETE
app.delete('/api/recipes/:id', (req, res, next)=> {
    Recipe.deleteOne({ _id: req.params.id }).then(result => { 
    console.log(result);
    res.status(200).json({message: 'Recipe deleted'})
});
});


module.exports = app; 