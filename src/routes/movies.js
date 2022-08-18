const { Router } = require('express');
const router = new Router();
const movies = require('../example.json');
const _ = require('underscore');

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    //Creación de id autoincrementable
    const id = movies.length + 1;
    const newMovie = { ...req.body, id };
    //console.log(req.body);

    //res.send('Received');
    const { title, director, year, rating } = req.body;

    if (id && title && director && year && rating) {
        movies.push(newMovie); //Sirve para enviar lo que hemos realizado el id autoincrementado
        res.json(movies);
        res.send('Se ha guardado correctamente la película');
    } else {
        if (!title) {
            res.send('Falta ingresar el title');
        } else if (!director) {
            res.send('Falta ingresar el director');
        } else if (!year) {
            res.send('Falta ingresar el year');
        } else if (!rating) {
            res.send('Falta ingresar el rating');
        }
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;
    if (id && title && director && year && rating) {
        _.each(movies, (movie) => {
            if (movie.id === id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    } else {
       res.send('Los datos no se pueden editar');
    }
});

module.exports = router;