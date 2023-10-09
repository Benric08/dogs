const {Router} = require('express');
const {getAllDogsHandler, getDogByIdHandler, getDogByNameHandler, createDogHandler} = require('../handlers/dogHandler');
const { uploadDogImageMiddleware } = require('../controllers/dogController');
const dogRouter = Router();

dogRouter.get('/name',getDogByNameHandler);
dogRouter.get('/',getAllDogsHandler);
dogRouter.get('/:id',getDogByIdHandler);
dogRouter.post('/',uploadDogImageMiddleware.single('image'),createDogHandler);

module.exports = dogRouter;