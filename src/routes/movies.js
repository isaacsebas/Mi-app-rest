const { Router } = require('express');
const router = new Router();
const movies =require('../example.json');



router.get('/', (req, res) => {
    res.json(movies);

});
module.exports=router;