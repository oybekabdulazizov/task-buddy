import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useEffect, useState, FC } from 'react';
import { BsPencilFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';

import { deleteTodo, getTodo, updateTodo } from '../../../../store/todosSlice';
import EditTodo from '../editTodo/EditTodo';

interface ITodoCard {
  todoId: string;
}

const TodoCard: FC<ITodoCard> = ({ todoId }) => {
  const todo = useSelector((state) => getTodo(state, todoId));
  const dispatch = useDispatch();

  const [checked, setChecked] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    setChecked(todo?.completed);
  }, []);

  useEffect(() => {
    dispatch(updateTodo({ ...todo, completed: checked }));
  }, [checked]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  return (
    <>
      {edit ? (
        <EditTodo todoId={todo.id} setEdit={setEdit} />
      ) : (
        <>
          {todo && (
            <div className='w-full flex flex-row gap-1 items-center mb-2'>
              <input
                type='checkbox'
                checked={checked}
                onChange={handleChange}
              />
              <label
                className={`w-full break-all py-3 px-3 text-sm rounded-lg ${
                  checked ? 'line-through text-slate-500' : ''
                }`}
              >
                {todo.task}
              </label>
              <div className='flex flex-row gap-2 ml-2'>
                <button
                  className='border rounded-lg text-md py-3 px-3 focus:outline-slate-200 focus:outline-8'
                  onClick={() => setEdit(!edit)}
                >
                  <BsPencilFill />
                </button>
                <button
                  className='border rounded-lg text-md py-3 px-3 focus:outline-slate-200 focus:outline-8'
                  onClick={handleDelete}
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default TodoCard;
