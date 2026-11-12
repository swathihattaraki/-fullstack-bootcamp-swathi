
import type { RawApiUser, Employee, EmployeeSummary } from "./types.js";

// Validate API user data
export function isValidRawUser(user: unknown): user is RawApiUser {
  if (typeof user !== "object" || user === null || Array.isArray(user)) {
    return false;
  }

  const record = user as Record<string, unknown>;

  return (
    typeof record.id === "number" &&
    Number.isFinite(record.id) &&
    typeof record.email === "string" &&
    record.email.includes("@")
  );
}

// 1. Fetch API data
export async function fetchEmployeeData(
  url: string
): Promise<RawApiUser[]> {
  console.log("Loading employee data...");

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data: unknown = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Invalid API response");
    }

    return data.filter(isValidRawUser);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  } finally {
    console.log("Request completed.");
  }
}

// 2. Transform API data
export function transformEmployees(users: RawApiUser[]): Employee[] {
  return users.map(user => ({
    id: user.id,
    fullName: user.name?.trim() || "Unknown",
    email: user.email.toLowerCase(),
    department: user.company?.name || "General",
    city: user.address?.city || "Remote",
    estimatedSalary: 50000 + user.id * 4500,
    isActive: user.id % 4 !== 0
  }));
}

// 3. Generate employee summary
export function generateSummary(
  employees: Employee[]
): EmployeeSummary {
  const active = employees.filter(user => user.isActive);

  const totalPayroll = active.reduce(
    (sum, user) => sum + user.estimatedSalary, 0
  );

  const employeesByDepartment = active.reduce((result, user) => {
    result[user.department] = (result[user.department] || 0) + 1;
    return result;
  }, {} as Record<string, number>);

  return {
    totalEmployees: employees.length,
    activeEmployees: active.length,
    totalPayroll,
    averageSalary: active.length
      ? Math.round(totalPayroll / active.length)
      : 0,
    employeesByDepartment
  };
}
