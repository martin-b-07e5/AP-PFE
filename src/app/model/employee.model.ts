export class Employee {
  private _name: string;
  private _lastName: string;
  private _cargo: string;
  private _salary: number;

  constructor(name: string, lastName: string, cargo: string, salary: number) {
    this._name = name;
    this._lastName = lastName;
    this._cargo = cargo;
    this._salary = salary;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get cargo(): string {
    return this._cargo;
  }

  set cargo(value: string) {
    this._cargo = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }
}
