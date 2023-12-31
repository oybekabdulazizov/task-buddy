import { FormEvent, useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getTodo,
  todo_type,
  updateTodo,
} from '../../../../services/store/todosSlice';
import Button from '../../../../components/button/Button';
import Input from '../../../../components/input/Input';
import IEditTodo from './IEditTodo';

const EditTodo: FC<IEditTodo> = ({ todoId, setEdit }) => {
  const dispatch = useDispatch();
  const todo: todo_type = useSelector((state) => getTodo(state, todoId || ''));

  const [task, setTask] = useState<string>(todo?.task || '');
  const [error, setError] = useState<string>('');

  const handleChange = (val: string) => {
    setError(!val || val.length < 1 ? 'Task is required' : '');
    setTask(val);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!task || task.length < 1) {
      setError('Task is required');
    } else {
      dispatch(updateTodo({ ...todo, task }));
      setEdit(false);
      setError('');
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col gap-1'>
        <div className='flex flex-row gap-3'>
          <Input
            value={task}
            onChange={handleChange}
            placeholder='e.g. Tidy up the room'
          />
          <Button title='Save' classes='py-2 px-[30px]' />
        </div>
        {error && error.length > 0 && <p className='text-red-500'>{error}</p>}
      </div>
    </form>
  );
};

export default EditTodo;
