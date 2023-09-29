const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (dbConnection) => {
  // defino el modelo
  dbConnection.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg:"Debe ingresar un nombre para el perro"
        }
      }
    },
    image: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg:"Debe adjuntar una imagen del perro"
        }
      }
    },
    height:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Debe ingresar la altura del perro"
        }
      }
    },
    weight:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Debe ingresar el peso del perro"
        }
      }

    },
    lifeSpan: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Debe ingresar los años de vida del perro"
        }
      }
    }
  }, {
    underscored: true
  });
};
