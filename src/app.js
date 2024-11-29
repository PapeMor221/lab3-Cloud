require('dotenv').config();

const express = require("express");
const cors = require('cors');
const employeeRoutes = require("./routes/employeeRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

app.use(cors({
  origin: '*' 
}));
app.use(express.json());

// Swagger UI pour la documentation de l'API
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/employees", employeeRoutes);

// Endpoint pour la readiness probe
app.get('/health/ready', (req, res) => {
  // Ici, vous pouvez vérifier si l'application est prête
  res.status(200).send('Ready');
});

// Endpoint pour la liveness probe
app.get('/health/live', (req, res) => {
  // Ici, vous pouvez vérifier si l'application est vivante
  res.status(200).send('Alive');
});

// Démarrer le serveur sur le port 3000
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
