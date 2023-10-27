import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { createTodo } from '../../../../store/todosSlice';
import Button from '../../../../components/button/Button';
import Input from '../../../../components/input/Input';

const CreateTodo: FC = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState<string>('');
  const [error, setError] = useState<string>('');

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
      dispatch(createTodo(task));
      setError('');
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-1 mb-2'>
      <div className='flex flex-row gap-3'>
        <Input value={task} onChange={handleChange} />
        <Button title='Add' classes='py-2 px-8' />
      </div>
      {error && error.length > 0 && <p className='text-red-500'>{error}</p>}
    </form>
  );
};

export default CreateTodo;
