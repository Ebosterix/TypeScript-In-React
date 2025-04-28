export enum TodoStatus {
  Incomplete = "Incomplete",
  Complete = "Complete",
}

export interface TodoInterface {
  id: number | string;
  title: string;
  isCompleted: TodoStatus;
}
