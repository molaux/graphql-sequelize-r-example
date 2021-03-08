/**
 * Auto generated by MySQL Workbench Schema Exporter.
 * Version 3.1.5-dev (node-Sequelize6 dev) on 2021-03-08 17:10:02.
 * Goto
 * https://github.com/mysql-workbench-schema-exporter/mysql-workbench-schema-exporter
 * for more information.
 */

const { DataTypes, Model } = require('sequelize')

class Store extends Model {
}

module.exports = (sequelize, extend) => {
  Store.init(extend({
    storeId: {
      type: DataTypes.SMALLINT,
      field: 'store_id',
      primaryKey: true,
      autoIncrement: true
    },
    lastUpdate: {
      type: DataTypes.DATE,
      field: 'last_update',
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }), {
    sequelize: sequelize,
    modelName: 'Store',
    tableName: 'store',
    indexes: [
      {
        name: 'idx_unique_manager',
        fields: ['manager_staff_id'],
        unique: true
      },
      {
        name: 'idx_fk_address_id',
        fields: ['address_id']
      }
    ],
    timestamps: false,
    underscored: true,
    syncOnAssociation: false
  })

  Store.associate = () => {
    // 1 <=> N association
    Store.hasMany(sequelize.models.Customer, {
      foreignKey: {
        name: 'storeId',
        allowNull: false
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
      targetKey: 'storeId',
      as: 'Customers'
    })

    // 1 <=> N association
    Store.hasMany(sequelize.models.Inventory, {
      foreignKey: {
        name: 'storeId',
        allowNull: false
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
      targetKey: 'storeId',
      as: 'Inventories'
    })

    // 1 <=> N association
    Store.hasMany(sequelize.models.Staff, {
      foreignKey: {
        name: 'storeId',
        allowNull: false
      },
      targetKey: 'storeId',
      constraints: false
    })

    // N <=> 1 association
    Store.belongsTo(sequelize.models.Staff, {
      foreignKey: {
        name: 'managerStaffId',
        allowNull: false
      },
      targetKey: 'staffId',
      as: 'ManagerStaff',
      constraints: false
    })

    // N <=> 1 association
    Store.belongsTo(sequelize.models.Address, {
      foreignKey: {
        name: 'addressId',
        allowNull: false
      },
      onUpdate: 'RESTRICT',
      targetKey: 'addressId'
    })
  }

  return Store
}
