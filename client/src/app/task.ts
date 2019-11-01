export class Task {
  id: number;
  todo: string;
  priority: string;

  constructor(id: number, todo: string, priority: string) {
    this.id = id;
    this.todo = todo;
    this.priority = priority;
  }
}
