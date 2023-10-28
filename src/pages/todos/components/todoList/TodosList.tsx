import { FC } from 'react';

import { todo_type } from '../../../../services/store/todosSlice';
import TodoCard from '../todoCard/TodoCard';

interface ITodoList {
  data: Array<todo_type>;
}

const TodosList: FC<ITodoList> = ({ data }) => {
  return (
    <div className='my-2'>
      {!data || data.length < 1 ? (
        <p className='font-light text-slate-950'>Let's add some tasks</p>
      ) : (
        <div className='flex flex-col gap-2'>
          {data.map((todo: todo_type) => (
            <TodoCard todoId={todo.id} key={todo.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodosList;
