const express = require('express');
//Conocer el respons  en consola
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Routes
/*app.get('/', (req, res)=>{
   // res.send('Hello Isaac');
   res.json({'Title':'Hello Isaac'});
});*/

app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

//Escuchar por el puerto
//app.set('port',4000);
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})