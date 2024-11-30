require('dotenv').config(); // Charge les variables d'environnement depuis le fichier .env
const mongoose = require('mongoose');

// Construire l'URL de la base de données MongoDB en utilisant les variables d'environnement
const databaseUrl = 'mongodb+srv://ndiayepm:IbrahimaBlog2024@cluster0.dgyni.mongodb.net/blogDB?retryWrites=true&w=majority&appName=Cluster0';


// Connexion à la base de données MongoDB
mongoose.connect(databaseUrl, {
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
