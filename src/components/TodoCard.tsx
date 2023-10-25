import { useSelector } from 'react-redux';
import { BsPencilFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';

import { getTodo } from '../store/todosSlice';

export default function TodoCard({ todoId }: { todoId: string }) {
  const todo = useSelector((state) => getTodo(state, todoId));

  return (
    <div className='w-full flex flex-row gap-1 items-center mb-2'>
      <input type='checkbox' />
      <label className='w-full break-all py-2 px-3 text-sm'>{todo.task}</label>
      <div className='flex flex-row gap-2 ml-2'>
        <button className='border rounded-lg text-lg py-2 px-2 focus:outline-slate-200 focus:outline-8'>
          <BsPencilFill />
        </button>
        <button className='border rounded-lg text-lg py-2 px-2 focus:outline-slate-200 focus:outline-8'>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}
