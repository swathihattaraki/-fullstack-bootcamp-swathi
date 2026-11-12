
export interface RawApiUser {
  id: number;
  name?: string;
  email: string;
  company?: {
    name?: string;
  };
  address?: {
    city?: string;
  };
}

export interface Employee {
  id: number;
  fullName: string;
  email: string;
  department: string;
  city: string;
  estimatedSalary: number;
  isActive: boolean;
}

export interface EmployeeSummary {
  totalEmployees: number;
  activeEmployees: number;
  totalPayroll: number;
  averageSalary: number;
  employeesByDepartment: Record<string, number>;
}
