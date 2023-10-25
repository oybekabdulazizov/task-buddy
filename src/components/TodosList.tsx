import { useSelector } from 'react-redux';

import { getTodos, todo_type } from '../store/todosSlice';

export default function TodosList() {
  const todos = useSelector(getTodos);

  return (
    <div className='my-2'>
      {todos.map((todo: todo_type) => (
        <div key={todo.id}>{todo.task}</div>
      ))}
    </div>
  );
}
