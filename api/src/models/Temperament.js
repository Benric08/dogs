const {DataTypes} = require('sequelize');

module.exports = (dbConnection) => {
  dbConnection.define('temperament',{
    temperamentId:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
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
