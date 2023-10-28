import { FC } from 'react';

import IInput from './IInput';

const Input: FC<IInput> = ({
  value,
  type = 'text',
  id = '',
  hidden = false,
  readonly = false,
  placeholder, 
  classes,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      hidden={hidden}
      readOnly={readonly}
      onChange={onChange}
      placeholder={placeholder}
      className={`py-3 px-3 text-sm w-full focus:outline-none rounded-lg ${classes}`}
    />
  );
};

export default Input;
