import { useState } from "react";
import "./App.css";
import TodoItem from "./TodoItem";
import { TodoInterface, TodoStatus } from "./todo-interface";
import { JSX } from "react";

// `list` array
const list: TodoInterface[] = [
  { id: Date.now(), title: "drink coffee", isCompleted: TodoStatus.Incomplete },
  {
    id: Date.now() + "a",
    title: "prepare code",
    isCompleted: TodoStatus.Incomplete,
  },
  { id: Date.now() + 2, title: "lunch", isCompleted: TodoStatus.Incomplete },
];

function App(): JSX.Element {
  // const [todos, setTodos] = useState(list); // w/o ts, ts infers what data type will be for the state variable
  const [todos, setTodos] = useState<TodoInterface[]>(list);
  console.log(todos);
  const [input, setInput] = useState<string>("");

  function addTodo(title: string): void {
    const newTodo: TodoInterface = {
      id: Date.now(),
      title,
      isCompleted: TodoStatus.Incomplete,
    };
    setTodos([...todos, newTodo]);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!input) {
      return;
    }
    // add the input to todos
    addTodo(input);
  }

  function toggleComplete(id: string | number) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isCompleted:
                todo.isCompleted === TodoStatus.Complete
                  ? TodoStatus.Incomplete
                  : TodoStatus.Complete,
            }
          : todo
      )
    );
  }

  function deleteTodoItem(id: string | number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <h1>Todo App (TS + React)</h1>
      {/* add a new todo item */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="new todo here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
       
      </form>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodoItem={deleteTodoItem}
        />
      ))}
    </>
  );
}

export default App;
