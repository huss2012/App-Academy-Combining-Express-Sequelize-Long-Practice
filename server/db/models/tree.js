'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tree.init({
    tree: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    location: {
      type: DataTypes.STRING,
    },
    heightFt: {
      type: DataTypes.FLOAT,
      validate: {
        min: {
          args: 0.1,
          msg: ("The The height should have a minimum value of zero.")
        }
      }
    },
    groundCircumferenceFt: {
      type: DataTypes.FLOAT,
      validate: {
        min: {
          args: 0.1,
          msg: ("The circumference should have a minimum value of zero.")
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Tree',
  });
  return Tree;
};
