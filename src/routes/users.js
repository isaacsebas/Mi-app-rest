const { Router } = require('express');
const router = new Router();
const users =require('../example2.json');



router.get('/', (req, res) => {
    res.json(users);

});
module.exports=router;