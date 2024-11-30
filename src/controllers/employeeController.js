const Employee = require("../models/employee"); // Importer le modèle Mongoose

// Créer un nouvel employé
exports.createEmployee = async (req, res) => {
  const { firstName, lastName, profile, salary, integration } = req.body;
  try {
    const employee = await Employee.create({ firstName, lastName, profile, salary, integration });
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Error creating employee", error });
  }
};

// Récupérer tous les employés
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find(); // Récupère tous les documents dans la collection
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving employees", error });
  }
};

// Récupérer un employé par ID
exports.getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id); // Trouve un document par son ID
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving employee", error });
  }
};

// Mettre à jour un employé par ID
exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, profile, salary, integration } = req.body;
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { firstName, lastName, profile, salary, integration },
      { new: true } // Retourne le document mis à jour
    );
    if (updatedEmployee) {
      res.status(200).json(updatedEmployee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating employee", error });
  }
};

// Supprimer un employé par ID
exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id); // Supprime un document par son ID
    if (deletedEmployee) {
      res.status(204).json({ message: "Employee deleted" });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting employee", error });
  }
};
