import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useEffect, useState, FC } from 'react';
import { BsPencilFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';

import {
  deleteTodo,
  getTodo,
  updateTodo,
} from '../../../../services/store/todosSlice';
import EditTodo from '../editTodo/EditTodo';
import Button from '../../../../components/button/Button';
import Checkbox from '../../../../components/checkbox/Checkbox';
import Label from '../../../../components/label/Label';

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

  return (
    <>
      {edit ? (
        <EditTodo todoId={todo.id} setEdit={setEdit} />
      ) : (
        <>
          {todo && (
            <div className='todo-card'>
              <div className='w-full flex flex-row gap-1'>
                <Checkbox
                  id={todo.task}
                  checked={checked}
                  onChange={handleChange}
                />
                <Label
                  text={todo.task}
                  classes={checked ? 'line-through text-slate-500' : ''}
                />
              </div>
              <div className='flex flex-row gap-2'>
                <Button
                  title={<BsPencilFill />}
                  classes='py-3 px-3'
                  onClick={() => setEdit(!edit)}
                />
                <Button
                  title={<AiFillDelete />}
                  classes='py-3 px-3'
                  onClick={() => dispatch(deleteTodo({ id: todo.id }))}
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default TodoCard;
