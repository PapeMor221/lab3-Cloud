// public/js/app.js

// Récupérer la liste des employés et l'afficher
const employeeList = document.getElementById("employeeList");

async function fetchEmployees() {
    const response = await fetch('/api/employees');
    const employees = await response.json();
    
    employeeList.innerHTML = ''; // Réinitialiser la liste avant d'ajouter
    employees.forEach(employee => {
        const li = document.createElement("li");
        li.textContent = `${employee.firstName} ${employee.lastName} - ${employee.profile} - ${employee.integration} - ${employee.salary}`;
        employeeList.appendChild(li);
    });
}

// Ajouter un employé via le formulaire
const employeeForm = document.getElementById("employeeForm");

employeeForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

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
        fetchEmployees(); // Recharger la liste des employés après ajout
    } else {
        alert("Erreur lors de l'ajout de l'employé");
    }

    employeeForm.reset(); // Réinitialiser le formulaire
});

// Charger la liste des employés au chargement de la page
fetchEmployees();
