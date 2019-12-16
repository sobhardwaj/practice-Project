export interface IUser {
  id: Number;
  name: String;
  position: String;
  age: Number;
  dob: String;
  nationality: String;
}
export interface ICompany {
  id: Number;
  name: String;
  location: String;
  HQ: String;
  Employee: IEmployee;
}
export interface IEmployee {
  id: String;
  name: String;
  place: String;
  Salary: Number;
  package: String;
  join_date: Date;
  company: ICompany;
  company_id: String;

  username: string;
  totalPosts: number;
  allPosts: Post[];
}
export interface ICurrentWeather {
  city: string;
  country: string;
  date: Date;
  image: string;
  temperature: number;
  description: string;
}
export interface Post {}
