export interface IUser {
  id: Number;
  name: String;
  position: String;
  age: Number;
  nationality: String;
}
export interface Company {
  id: Number;
  name: String;
  location: String;
  HQ: String;
  Employee: Employee;
}
export interface Employee {
  id: String;
  name: String;
  place: String;
  Salary: Number;
  company: Company;
  company_id: String;
}
