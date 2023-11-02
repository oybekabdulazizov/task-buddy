import { useDispatch, useSelector } from 'react-redux';
import { useState, FC } from 'react';
import { BsPencilFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';

import {
  deleteTodo,
  getTodo,
  todo_type,
  updateTodo,
} from '../../../../services/store/todosSlice';
import EditTodo from '../editTodo/EditTodo';
import Button from '../../../../components/button/Button';
import Checkbox from '../../../../components/checkbox/Checkbox';
import Label from '../../../../components/label/Label';
import ITodoCard from './ITodoCard';

const TodoCard: FC<ITodoCard> = ({ todoId }) => {
  const todo: todo_type = useSelector((state) => getTodo(state, todoId ));
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(todo?.completed || false);
  const [edit, setEdit] = useState(false);
  
  const handleChange = (c: boolean) => {
    setChecked(c);
    dispatch(updateTodo({ ...todo, completed: c }));
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
                  htmlFor={todo.task}
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
