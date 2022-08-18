const { Router } = require('express');
const router = new Router();
const movies = require('../example.json');



router.get('/', (req, res) => {
    res.json(movies);

});

router.post('/', (req, res) => {

    //Creacion de id automaticamente
    const id = movies.length + 1;
    const newMovie = { ...req.body, id };
    //console.log(req.body);

    //res.send('received');
    const { title, director, year, raiting } = req.body;
    if (id && title && director && year && raiting) {
        movies.push(newMovie);
        res.json(movies);
        res.send('Se ha guardado correctamente la pelicula');
    }else if(!title){
          res.send('Falta ingresar el titulo');
    }else if(!director){
        res.send('Falta ingresar el nombre del director');
    }else if(!year){
        res.send('Falta ingresar el año');
    }else if(!raiting){
        res.send('Falta ingresar el raiting');
        
    }
});
/*router.put('/:id', (req, res) => {
   const{id}=req.params;
    const { title, director, year, raiting } = req.body;
    if(title && director && year && raiting){
        _.each(movies, (movie, i) => {

            if(movie.id===id){
                movie.title===title;
                movie.director===director;
                movie.year===year;
                movie.raiting ===raiting;
            }
            res.json(movies);
            res.send('Los datos se han dictado correctamente')

        

    });

    }else{
        res.send('Los datos  no se han podido editar')

    }


});*/

module.exports = router;