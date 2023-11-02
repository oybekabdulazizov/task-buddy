import { ChangeEvent, FC, useState } from 'react';

import IInput from './IInput';

const Input: FC<IInput> = ({
  value,
  type = 'text',
  name = 'text',
  id = 'text',
  hidden = false,
  readonly = false,
  disabled = false,
  placeholder, 
  classes,
  onChange,
}) => {
  const [val, setVal] = useState<string>(value || '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    onChange(e.target.value);
  }

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={val}
      hidden={hidden}
      disabled={disabled}
      readOnly={readonly}
      onChange={handleChange}
      placeholder={placeholder}
      className={`py-3 px-3 text-sm w-full focus:outline-none rounded-lg ${classes}`}
    />
  );
};

export default Input;
