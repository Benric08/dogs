const {Router} = require('express');
const {getAllDogsHandler, getDogByIdHandler, getDogByNameHandler, createDogHandler} = require('../handlers/dogHandler');
const dogRouter = Router();

dogRouter.get('/name',getDogByNameHandler);
dogRouter.get('/',getAllDogsHandler);
dogRouter.get('/:id',getDogByIdHandler);
dogRouter.post('/',createDogHandler);

module.exports = dogRouter;