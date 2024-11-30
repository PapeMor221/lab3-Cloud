const employeeList = document.getElementById("employeeList");
const employeeForm = document.getElementById("employeeForm");
const editEmployeeContainer = document.getElementById("editEmployeeContainer");
const editEmployeeForm = document.getElementById("editEmployeeForm");
let editingEmployeeId = null; // Stocke l'ID de l'employé en cours de modification

// Charger la liste des employés
async function fetchEmployees() {
    const response = await fetch('/api/employees');
    const employees = await response.json();
    
    employeeList.innerHTML = ''; // Réinitialiser la liste
    employees.forEach(employee => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${employee.firstName} ${employee.lastName} - ${employee.profile} - ${employee.integration} - $${employee.salary}
            <button onclick="editEmployee('${employee._id}')">✏️</button>
            <button onclick="deleteEmployee('${employee._id}')">🗑️</button>
        `;
        employeeList.appendChild(li);
    });
}

// Ajouter un employé
employeeForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const profile = document.getElementById("profile").value;
    const integration = document.getElementById("integration").value;
    const salary = document.getElementById("salary").value;

    const response = await fetch('/api/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            firstName, 
            lastName, 
            profile, 
            integration, 
            salary 
        })
    });

    if (response.ok) {
        fetchEmployees();
    } else {
        alert("Erreur lors de l'ajout de l'employé");
    }

    employeeForm.reset();
});

// Supprimer un employé
async function deleteEmployee(employeeId) {
    const response = await fetch(`/api/employees/${employeeId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        fetchEmployees();
    } else {
        alert("Erreur lors de la suppression de l'employé");
    }
}

// Modifier un employé
async function editEmployee(employeeId) {
    // Charger les données de l'employé
    const response = await fetch(`/api/employees/${employeeId}`);
    const employee = await response.json();

    // Remplir le formulaire de modification
    editingEmployeeId = employeeId;
    document.getElementById("editFirstName").value = employee.firstName;
    document.getElementById("editLastName").value = employee.lastName;
    document.getElementById("editProfile").value = employee.profile;
    document.getElementById("editIntegration").value = employee.integration;
    document.getElementById("editSalary").value = employee.salary;

    // Afficher le formulaire de modification
    editEmployeeContainer.style.display = "block";
}

// Soumettre le formulaire de modification
editEmployeeForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const firstName = document.getElementById("editFirstName").value;
    const lastName = document.getElementById("editLastName").value;
    const profile = document.getElementById("editProfile").value;
    const integration = document.getElementById("editIntegration").value;
    const salary = document.getElementById("editSalary").value;

    const response = await fetch(`/api/employees/${editingEmployeeId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            firstName, 
            lastName, 
            profile, 
            integration, 
            salary 
        })
    });

    if (response.ok) {
        fetchEmployees();
        editEmployeeContainer.style.display = "none";
        editingEmployeeId = null;
    } else {
        alert("Erreur lors de la mise à jour de l'employé");
    }
});

// Annuler la modification
document.getElementById("cancelEdit").addEventListener("click", () => {
    editEmployeeContainer.style.display = "none";
    editingEmployeeId = null;
});

// Charger la liste des employés au démarrage
fetchEmployees();
