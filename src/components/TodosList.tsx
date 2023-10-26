import { useSelector } from 'react-redux';

import { getTodos, todo_type } from '../store/todosSlice';
import TodoCard from './TodoCard';
import { useEffect, useState } from 'react';

export default function TodosList() {
  const [data, setData] = useState<Array<todo_type>>([]);
  const todos = useSelector(getTodos);

  useEffect(() => {
    setData(todos);
  }, [todos]);

  return (
    <div className='my-2'>
      {!data || data.length < 1 ? (
        <p className='font-light text-slate-700'>Let's add some tasks</p>
      ) : (
        <>
          {data.map((todo: todo_type) => (
            <TodoCard todoId={todo.id} key={todo.id} />
          ))}
        </>
      )}
    </div>
  );
}
