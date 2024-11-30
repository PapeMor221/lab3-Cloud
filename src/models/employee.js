require('dotenv').config(); // Charge les variables d'environnement depuis le fichier .env
const mongoose = require('mongoose');


// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connexion à MongoDB réussie"))
  .catch((err) => console.error("Erreur de connexion à MongoDB :", err));

// Définir le modèle Employee
const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true, // Champ obligatoire
  },
  lastName: {
    type: String,
    required: true, // Champ obligatoire
  },
  profile: {
    type: String,
    default: null, // Optionnel avec une valeur par défaut
  },
  integration: {
    type: Number,
    default: null, // Optionnel avec une valeur par défaut
  },
  salary: {
    type: Number,
    default: null, // Optionnel avec une valeur par défaut
  },
});

// Créer le modèle basé sur le schéma
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
