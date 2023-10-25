import { useSelector } from 'react-redux';

import { getTodos, todo_type } from '../store/todosSlice';
import TodoCard from './TodoCard';

export default function TodosList() {
  const todos = useSelector(getTodos);

  return (
    <div className='my-2'>
      {!todos || todos.length < 1 ? (
        <p className='font-light text-slate-700'>Let's add some tasks</p>
      ) : (
        <>
          {todos.map((todo: todo_type) => (
            <TodoCard todoId={todo.id} key={todo.id} />
          ))}
        </>
      )}
    </div>
  );
}
