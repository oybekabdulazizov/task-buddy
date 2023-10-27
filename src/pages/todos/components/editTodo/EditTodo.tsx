import { ChangeEvent, FormEvent, useEffect, useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTodo, todo_type, updateTodo } from '../../../../store/todosSlice';
import Button from '../../../../components/button/Button';
import Input from '../../../../components/input/Input';

interface IEditTodo {
  todoId: string;
  setEdit: (edit: boolean) => void;
}

const EditTodo: FC<IEditTodo> = ({ todoId, setEdit }) => {
  const dispatch = useDispatch();
  const todo: todo_type = useSelector((state) => getTodo(state, todoId || ''));

  const [task, setTask] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setTask(todo.task);
  }, []);

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
      dispatch(updateTodo({ ...todo, task }));
      setEdit(false);
      setError('');
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-1 mb-2'>
      <div className='flex flex-row gap-3'>
        <Input value={task} onChange={handleChange} />
        <Button title='Save' classes='py-2 px-[30px]' />
      </div>
      {error && error.length > 0 && <p className='text-red-500'>{error}</p>}
    </form>
  );
};

export default EditTodo;
