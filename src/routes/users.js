const { Router } = require('express');
const router = new Router();
const users =require('../example2.json');
const _ = require('underscore');


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
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, telefono, edad } = req.body;
    if (id && nombre && direccion && telefono && edad) {
        _.each(users, (user) => {
            if (user.id === id) {
                user.nombre = nombre;
                user.direccion = direccion;
                user.telefono = telefono;
                user.edad = edad;
            }
        });
        res.json(users);
    } else {
       res.send('Los datos no se pueden editar');
    }


});

router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    _.each(users,(user,i)=>{
       if(user.id==id){
        user.splice(i,1);
       }
    });
    res.send(users);
});

module.exports=router;