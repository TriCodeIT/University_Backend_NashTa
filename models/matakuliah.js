'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MataKuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MataKuliah.hasMany(models.Nilai, { foreignKey: 'ID_MataKuliah' })
    }
  };
  MataKuliah.init({
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      validate: {
        unique: {
          args: true,
          msg: "ID harus berupa yang unik"
        }
      }
    },
    NamaMataKuliah: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3],
          msg: "Nama Mata Kuliah panjangnya paling sedikit 3 karakter"
        }
      }
    },
    ID_Mahasiswa: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Mahasiswa',
        key: 'ID'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }
  }, 
  {
    sequelize,
    modelName: "MataKuliah",
    timestamps: false,
    freezeTableName: true,
    tableName: "MataKuliah"
  });
  return MataKuliah;
};