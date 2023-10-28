import { FC } from 'react';

import ICheckbox from './ICheckbox';

const Checkbox: FC<ICheckbox> = ({
  checked,
  name='checkbox',
  id = 'checkbox',
  disabled,
  classes,
  onChange,
}) => {
  return (
    <input
      type='checkbox'
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
      className={`${classes}`}
      disabled={disabled}
      alt='checkbox-input'
    />
  );
};

export default Checkbox;
