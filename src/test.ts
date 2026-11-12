
import {
  isValidRawUser,
  transformEmployees,
  generateSummary,
  fetchEmployeeData
} from "./employeeService.js";

import type { RawApiUser } from "./types.js";

function test(name: string, passed: boolean) {
  console.log(`${passed ? "PASS" : "FAIL"}: ${name}`);
}

const validUser = {
  id: 1,
  name: "John",
  email: "john@example.com",
  company: { name: "IT" },
  address: { city: "Bangalore" }
};

// Test 1: Valid employee
test("Valid employee", isValidRawUser(validUser));

// Test 2: Missing name
const noName: RawApiUser = {
  id: 2,
  email: "test@example.com"
};

test(
  "Missing name",
  transformEmployees([noName])[0].fullName === "Unknown"
);

// Test 3: Missing email
test(
  "Missing email",
  !isValidRawUser({ id: 3, name: "David" })
);

// Test 4: Invalid employee ID
test(
  "Invalid employee ID",
  !isValidRawUser({
    id: "abc",
    email: "test@example.com"
  })
);

// Test 5: Empty response
const emptySummary = generateSummary([]);

test(
  "Empty employee response",
  emptySummary.totalEmployees === 0 &&
  emptySummary.activeEmployees === 0 &&
  emptySummary.totalPayroll === 0
);

// Test 6: Multiple employees in one department
const employees = transformEmployees([
  validUser,
  {
    id: 5,
    name: "David",
    email: "david@example.com",
    company: { name: "IT" }
  }
]);

const summary = generateSummary(employees);

test(
  "Department employee count",
  summary.employeesByDepartment["IT"] === 2
);

// Test 7: HTTP error handling
async function testHttpError() {
  try {
    await fetchEmployeeData(
      "https://jsonplaceholder.typicode.com/invalid-url"
    );

    test("HTTP error handling", false);
  } catch {
    test("HTTP error handling", true);
  }
}

// Test 8: Network error handling
async function testNetworkError() {
  try {
    await fetchEmployeeData(
      "https://this-domain-does-not-exist.invalid"
    );

    test("Network error handling", false);
  } catch {
    test("Network error handling", true);
  }
}

// Run asynchronous tests one after another
async function runAsyncTests() {
  await testHttpError();
  await testNetworkError();
}

runAsyncTests();
