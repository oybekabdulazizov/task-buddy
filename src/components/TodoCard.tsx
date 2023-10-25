import { useDispatch, useSelector } from 'react-redux';
import { BsPencilFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { ChangeEvent, useState } from 'react';

import { getTodo, completeTodo } from '../store/todosSlice';

export default function TodoCard({ todoId }: { todoId: string }) {
  const todo = useSelector((state) => getTodo(state, todoId));
  const dispatch = useDispatch();

  const [checked, setChecked] = useState<boolean>(todo.completed);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    dispatch(completeTodo(todoId));
  };

  return (
    <div className='w-full flex flex-row gap-1 items-center mb-2'>
      <input type='checkbox' checked={checked} onChange={handleChange} />
      <label
        className={`w-full break-all py-2 px-3 text-sm ${
          checked ? 'line-through text-slate-500' : ''
        }`}
      >
        {todo.task}
      </label>
      <div className='flex flex-row gap-2 ml-2'>
        <button
          className={`border rounded-lg text-lg py-2 px-2 focus:outline-slate-200 focus:outline-8 ${
            checked ? 'text-slate-500' : ''
          }`}
          disabled={checked}
        >
          <BsPencilFill />
        </button>
        <button className='border rounded-lg text-lg py-2 px-2 focus:outline-slate-200 focus:outline-8'>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}
