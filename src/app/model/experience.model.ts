export class Experience {
  // same names as used in java.
  id?: number;
  name: string;
  description: string;
  startedAt?: Date;
  finishedAt?: Date;

  constructor(
    name: string,
    description: string,
    startedAt?: Date,
    finishedAt?: Date
  ) {
    this.name = name;
    this.description = description;
    this.startedAt = startedAt;
    this.finishedAt = finishedAt;
  }
}
