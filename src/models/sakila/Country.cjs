/**
 * Auto generated by MySQL Workbench Schema Exporter.
 * Version 3.1.5-dev (node-Sequelize6 dev) on 2021-04-02 10:49:25.
 * Goto
 * https://github.com/mysql-workbench-schema-exporter/mysql-workbench-schema-exporter
 * for more information.
 */

const { DataTypes, Model } = require('sequelize')

class Country extends Model {
}

module.exports = (sequelize, extend) => {
  Country.init(extend({
    countryId: {
      type: DataTypes.SMALLINT,
      field: 'country_id',
      primaryKey: true,
      autoIncrement: true
    },
    country: {
      type: DataTypes.STRING(50),
      field: 'country',
      allowNull: false
    },
    lastUpdate: {
      type: DataTypes.DATE,
      field: 'last_update',
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }), {
    sequelize: sequelize,
    modelName: 'Country',
    tableName: 'country',
    timestamps: false,
    underscored: true,
    syncOnAssociation: false
  })

  Country.associate = () => {
    // 1 <=> N association
    Country.hasMany(sequelize.models.City, {
      foreignKey: {
        name: 'countryId',
        allowNull: false
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
      targetKey: 'countryId',
      as: 'Cities'
    })
  }

  return Country
}
