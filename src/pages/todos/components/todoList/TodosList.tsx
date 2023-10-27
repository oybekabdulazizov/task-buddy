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
};

export default TodosList;
