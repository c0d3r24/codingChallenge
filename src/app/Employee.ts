export class Employee {
  id: number;
  active: boolean;
  name: string;
  reportingEmployees?: Array<Employee>;
}
