const {Router} = require('express');
const {getAllDogsHandler, getDogByIdHandler, getDogByNameHandler} = require('../handlers/dogHandler');
const dogRouter = Router();

dogRouter.get('/name',getDogByNameHandler);
dogRouter.get('/',getAllDogsHandler);
dogRouter.get('/:id',getDogByIdHandler);


module.exports = dogRouter;