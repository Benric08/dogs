//?                       _oo0oo_
//?                      o8888888o
//?                      88" . "88
//?                      (| -_- |)
//?                      0\  =  /0
//?                    ___/`---'\___
//?                  .' \\|     |// '.
//?                 / \\|||  :  |||// \
//?                / _||||| -:- |||||- \
//?               |   | \\\  -  /// |   |
//?               | \_|  ''\---/''  |_/ |
//?               \  .-\__  '-'  ___/-. /
//!             ___'. .'  /--.--\  `. .'___
//!          ."" '<  `.___\_<|>_/___.' >' "".
//!         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//!         \  \ `_.   \_ __\ /__ _/   .-` /  /
//!     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
require('dotenv').config();
const server = require('./src/app.js');
const { dbConnection } = require('./src/db.js');
const {saveDataFromApiToDataBase} = require('./src/controllers/temperamentController.js')
const {SERVER_PORT} = process.env;
// Syncing all the models at once.
dbConnection.sync({ force: true }).then(() => {
  //? Insert data to database before the app run
  saveDataFromApiToDataBase();
  //? lounching the server
  server.listen(SERVER_PORT, () => {
    console.log(`%s listening at ${SERVER_PORT}`); // eslint-disable-line no-console
  });
});
