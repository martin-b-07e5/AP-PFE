export class Education {
  // same names as used in java.
  id?: number;
  name: string;
  description: string;
  startedAt?: Date;

  constructor(name: string, description: string, startedAt?: Date) {
    this.name = name;
    this.description = description;
    this.startedAt = startedAt;
  }
}
