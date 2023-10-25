import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todosSlice';

export default function TodoForm() {
  const [task, setTask] = useState<string>('');
  const [error, setError] = useState<string>('');

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setError(!value || value.length < 1 ? 'Task is required' : '');

    setTask(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!task || task.length < 1) {
      setError('Task is required');
    } else {
      dispatch(addTodo(task));
      setError('');
      setTask('');
    }
  };

  return (
    <div className='w-full my-6'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-1'>
        <div className='flex flex-row gap-3'>
          <input
            type='text'
            value={task}
            className='py-2 px-3 w-full focus:outline-none rounded-lg'
            autoFocus
            placeholder='e.g. Apply to 50 jobs'
            onChange={handleChange}
          />
          <button
            type='submit'
            className='border rounded-lg py-2 px-6 text-md font-normal focus:outline-slate-200'
          >
            Add
          </button>
        </div>
        {error && error.length > 0 && <p className='text-red-500'>{error}</p>}
      </form>
    </div>
  );
}
