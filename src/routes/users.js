const { Router } = require('express');
const router = new Router();
const users =require('../example2.json');



router.get('/', (req, res) => {
    res.json(users);

});
router.post('/', (req, res) => {

    //Creacion de id automaticamente
    const id = users.length + 1;
    const newUsers = { ...req.body, id };
    //console.log(req.body);

    //res.send('received');
    const { nombre, direccion, telefono, edad } = req.body;
    if (id && nombre && direccion && telefono && edad) {
        users.push(newUsers);
        res.json(users);
        res.send('Se ha guardado correctamente los Usuarios');
        //Validaciones
    }else if(!nombre){
          res.send('Falta ingresar el nombre');
    }else if(!direccion){
        res.send('Falta ingresar la direccion');
    }else if(!telefono){
        res.send('Falta ingresar el telefono');
    }else if(!edad){
        res.send('Falta ingresar la edad');
        
    }
});
module.exports=router;