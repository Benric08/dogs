 const {Router} = require('express') ;
 const {saveDataFromApiToDataBaseHandler} = require('../handlers/temperamentHandler');

 const temperamentRouter = Router();

 temperamentRouter.get('/',saveDataFromApiToDataBaseHandler);
 module.exports = temperamentRouter;
