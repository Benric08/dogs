const {DataTypes} = require('sequelize');

module.exports = (dbConnection) => {
  dbConnection.define('dogTemperament',{

  },{
    timestamps:false,
    underscored:true
  })
}
