const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// Route pour créer un nouvel employé
router.post("/", employeeController.createEmployee);

// Route pour récupérer tous les employés
router.get("/", employeeController.getEmployees);

// Route pour récupérer un employé par ID
router.get("/:id", employeeController.getEmployeeById);

// Route pour mettre à jour un employé par ID
router.put("/:id", employeeController.updateEmployee);

// Route pour supprimer un employé par ID
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
