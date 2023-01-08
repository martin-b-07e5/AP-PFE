export class Person {
  // private personId?: Number;
  // private personId!: Number;
  private _firstName: String;
  private _lastName: String;
  private _email: String


  // constructor


  constructor(firstName: String, lastName: String, email: String) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
  }

// getters-setters
  get firstName(): String {
    return this._firstName;
  }

  set firstName(value: String) {
    this._firstName = value;
  }

  get lastName(): String {
    return this._lastName;
  }

  set lastName(value: String) {
    this._lastName = value;
  }

  get email(): String {
    return this._email;
  }

  set email(value: String) {
    this._email = value;
  }

}
