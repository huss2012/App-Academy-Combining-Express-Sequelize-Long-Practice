'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Insect.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/
      }
    },
    description: DataTypes.STRING,
    territory: DataTypes.STRING,
    fact: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 240],
          msg: "The fact must be between 0 and 240 characters."
        }
      }
    },
    millimeters: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: {
          args: 0.1,
          msg: "Millimeters should be grater then zero."
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};
