
import {
  fetchEmployeeData,
  transformEmployees,
  generateSummary
} from "./employeeService.js";

const API_URL = "https://jsonplaceholder.typicode.com/users";

async function main() {
  try {
    const rawUsers = await fetchEmployeeData(API_URL);

    const employees = transformEmployees(rawUsers);

    const summary = generateSummary(employees);

    console.log("\nEmployee Records:");
    console.table(employees);

    console.log("\nEmployee Summary:");
    console.log(summary);

  } catch (error) {
    console.error("Application failed:", error);
  }
}

main();
