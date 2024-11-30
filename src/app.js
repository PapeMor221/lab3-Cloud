const express = require("express");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const dotenv = require("dotenv");
const employeeRoutes = require("./routes/employeeRoutes"); // Import des routes

dotenv.config();

const app = express();

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Connexion à MongoDB Atlas
mongoose.connect('mongodb+srv://ndiayepm:IbrahimaBlog2024@cluster0.dgyni.mongodb.net/blogDB?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

// Utilisation des routes
app.use("/api/employees", employeeRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Démarrage du serveur
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
