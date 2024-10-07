const { DataTypes } = require("sequelize");
const sequelize = require("../contexts/DatabaseContext");

const modelsMicrocontrollers = sequelize.define(
    "microcontrollers",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pins: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: {},
        },
        counter: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        datasheet: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        timestamps: false,
    },
);

module.exports = modelsMicrocontrollers;
