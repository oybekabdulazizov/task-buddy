import { useSelector } from 'react-redux';

import { getTodos, todo_type } from '../store/todosSlice';

export default function TodosList() {
  const todos = useSelector(getTodos);

  return (
    <div>
      {todos.map((todo: todo_type) => (
        <div key={todo.id}>{todo.task}</div>
      ))}
    </div>
  );
}
