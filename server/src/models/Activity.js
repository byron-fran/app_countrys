const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        name : {
            type : DataTypes.STRING,
            allowNull :false
        },
        difficulty : {
            type : DataTypes.INTEGER,
            allowNull : true,
            validate : {
                min: 1,
                max : 5
            }
        },
        duration : {
            type: DataTypes.STRING, // o DataTypes.TIME dependiendo de tu SGBD y tus necesidades
            validate: {
              // Puedes agregar validaciones adicionales si es necesario
              is: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/, // HH:MM or HH:MM:SS
            }
        },
        season :{
            type: DataTypes.ARRAY(DataTypes.STRING), // Cambia STRING si es otro tipo de dato que deseas
            allowNull: true,
            defaultValue: []
        }
    },
    {timestamps: false}
    )
}