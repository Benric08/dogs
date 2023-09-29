const {DataTypes} = require('sequelize');

module.exports = (dbConnection) => {
  dbConnection.define('temperament',{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
        validation:{
            notNull:{
                msg:"Debe ingresar un nombre para el temperamento"
            }
        }
    }
  },{
    underscored:true,
    timestamps:false
  })
}
