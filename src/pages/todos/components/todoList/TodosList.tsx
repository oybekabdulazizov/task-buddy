import { FC } from 'react';

import TodoCard from '../todoCard/TodoCard';
import ITodoList from './ITodoList';

const TodosList: FC<ITodoList> = ({ data }) => {
  return (
    <div className='my-2'>
      {!data || data.length < 1 ? (
        <p className='font-light text-slate-950'>Let's add some tasks</p>
      ) : (
        <div className='flex flex-col gap-2'>
          {data.map((todo) => (
            <TodoCard todoId={todo.id} key={todo.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodosList;
