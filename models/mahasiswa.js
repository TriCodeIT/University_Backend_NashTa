'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mahasiswa.hasMany(models.Nilai, { foreignKey: "ID_Mahasiswa"})
    }
  };
  Mahasiswa.init({
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    Nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3],
          msg: "Nama panjangnya paling sedikit 3 karakter"
        }
      }
    },
    Alamat: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5],
          msg: "Alamat panjangnya paling sedikit 5 karakter"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Mahasiswa',
    timestamps: false,
    freezeTableName: true,
    tableName: "Mahasiswa"
  });
  return Mahasiswa;
};