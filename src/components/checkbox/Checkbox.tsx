import { FC } from 'react';

import ICheckbox from './ICheckbox';

const Input: FC<ICheckbox> = ({
  id = '',
  checked,
  disabled = false,
  classes,
  onChange,
}) => {
  return (
    <input
      type='checkbox'
      id={id}
      checked={checked}
      onChange={onChange}
      className={`${classes}`}
      disabled={disabled}
    />
  );
};

export default Input;
