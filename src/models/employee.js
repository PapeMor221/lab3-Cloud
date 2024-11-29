require('dotenv').config(); // Charge les variables d'environnement depuis le fichier .env

const { Sequelize, DataTypes } = require("sequelize");

// Construire l'URL de la base de données en utilisant les variables d'environnement
const databaseUrl = `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;


const sequelize = new Sequelize(databaseUrl, {
  dialect: "postgres",
});

// Define the Employee model
const Employee = sequelize.define("Employee", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  integration: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  salary: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

// Sync the model with the database
sequelize.sync();

module.exports = Employee;