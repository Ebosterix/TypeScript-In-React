import { TodoStatus } from "./todo-interface";

interface Props {
  todo: TodoInterface;
  toggleComplete: (id: string | number) => void;
  deleteTodoItem: (id: string | number) => void;
}

export default function TodoItem({
  todo,
  toggleComplete,
  deleteTodoItem,
}: Props): JSX.Element {
  return (
    <div>
      <h3>{todo.title}</h3>
      <input
        type="checkbox"
        checked={todo.isCompleted === TodoStatus.Complete}
        onChange={() => toggleComplete(todo.id)}
      />
      <button onClick={() => deleteTodoItem(todo.id)}>Delete Item X</button>
    </div>
  );
}
