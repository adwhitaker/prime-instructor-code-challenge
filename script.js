// Constants
const tableColumnKeys = [
  "firstName",
  "lastName",
  "employeeID",
  "title",
  "salary",
  "delete",
];

// HTML Elements
const addEmployeeForm = document.getElementById("add-employee-form");
const employeesTable = document.getElementById("employees-table__body");
const employeesTableEmpty = document.getElementById("employees-table__empty");
const employeesTableErrorMessage = document.getElementById(
  "employees-table__message-bar"
);
const monthlySalaryTotal = document.getElementById("total-monthly-salary");

// Utils
const formatUSCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// State
let employees = [];

const calculateMonthlySalaryTotal = () => {
  let finalSalary = 0;

  for (const employee of employees) {
    const monthlySalary = employee.salary / 12;
    finalSalary += monthlySalary;
  }

  return finalSalary;
};

const removeDeletedEmployeeFromEmployees = (employeeID) => {
  const filteredEmployees = [];

  for (const employee of employees) {
    if (employee.employeeID !== employeeID) {
      filteredEmployees.push(employee);
    }
  }

  return filteredEmployees;
};

const handleDeleteClick = (e) => {
  const employeeIDToDelete = e.target.dataset.id;
  const employeeTableRow = e.target.parentNode.parentNode;
  const employeeTableRowIndex = employeeTableRow.rowIndex;

  // Delete employee row from table
  employeesTable.deleteRow(employeeTableRowIndex - 1);

  // Update employees state
  employees = removeDeletedEmployeeFromEmployees(employeeIDToDelete);

  // Show the empty table row if there are no employees
  if (!employees.length) {
    employeesTableEmpty.classList.remove("hide");
  }

  // Calculate and update monthly salary total
  const calculatedMonthlySalaryTotal = calculateMonthlySalaryTotal();
  monthlySalaryTotal.innerText = formatUSCurrency.format(
    calculatedMonthlySalaryTotal
  );

  // Validate monthly total
  if (calculatedMonthlySalaryTotal <= 20_000) {
    employeesTableErrorMessage.classList.add("hide");
  }
};

const handleAddEmployeeFormSubmit = (e) => {
  e.preventDefault();

  // Hide the empty table row because an employee is being added
  employeesTableEmpty.classList.add("hide");

  // Get new employee details
  const formFields = e.target.elements;

  const newEmployee = {
    firstName: formFields.namedItem("first-name").value,
    lastName: formFields.namedItem("last-name").value,
    employeeID: formFields.namedItem("employee-id").value,
    title: formFields.namedItem("title").value,
    salary: Number(formFields.namedItem("salary").value),
  };

  // Populate a new table row with new employee details
  const row = employeesTable.insertRow();
  for (const columnKey of tableColumnKeys) {
    const cell = row.insertCell();
    const cellValue = newEmployee[columnKey];

    if (columnKey === "salary") {
      cell.classList.add("right-align");
      cell.innerText = formatUSCurrency.format(cellValue);
    } else if (columnKey === "delete") {
      cell.classList.add("center-align");

      const button = document.createElement("button");
      button.classList.add("btn-small");
      button.classList.add("indigo");
      button.dataset.id = newEmployee.employeeID;
      button.innerText = "Delete";
      button.addEventListener("click", handleDeleteClick);

      cell.appendChild(button);
    } else {
      cell.innerText = cellValue;
    }
  }

  // Update employees state
  employees.push(newEmployee);

  // Calculate and update monthly salary total
  const calculatedMonthlySalaryTotal = calculateMonthlySalaryTotal();
  monthlySalaryTotal.innerText = formatUSCurrency.format(
    calculatedMonthlySalaryTotal
  );

  // Validate monthly total
  if (calculatedMonthlySalaryTotal > 20_000) {
    employeesTableErrorMessage.classList.remove("hide");
  }
};

// Setup event listeners
addEmployeeForm.addEventListener("submit", handleAddEmployeeFormSubmit);
