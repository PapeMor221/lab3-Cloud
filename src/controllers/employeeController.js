const Employee = require("../models/employee");

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
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving employees", error });
  }
};

// Récupérer un employé par ID
exports.getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findByPk(id);
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
    const employee = await Employee.findByPk(id);
    if (employee) {
      employee.firstName = firstName || employee.firstName;
      employee.lastName = lastName || employee.lastName;
      employee.profile = profile || employee.profile;
      employee.salary = salary || employee.salary;
      employee.integration = integration || employee.integration;
      await employee.save();
      res.status(200).json(employee);
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
    const employee = await Employee.findByPk(id);
    if (employee) {
      await employee.destroy();
      res.status(204).json({ message: "Employee deleted" });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting employee", error });
  }
};
