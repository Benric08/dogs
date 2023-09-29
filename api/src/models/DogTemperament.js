const { DataTypes } = require('sequelize');

module.exports = (dbConnection) => {
  dbConnection.define('dogTemperament', {
   /*  dogId: {
      type: DataTypes.UUID,
      validate: {
        customForeignKeyConstraint: {
          args: 'dogId',
          msg: 'Custom error message for foreign key constraint'
        }
      }
    },
    temperamentId: {
      type: DataTypes.UUID,
      validate: {
        customForeignKeyConstraint: {
          args: 'temperamentId',
          msg: 'Custom error message for foreign key constraint'
        }
      }
    } */
  }, {
    timestamps: false,
    underscored: true
  })
}
