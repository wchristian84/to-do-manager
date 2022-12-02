export class Task {
  constructor(
    public description: string,
    public materialsNeeded: string[],
    public priority: string,
  ) {}
}
