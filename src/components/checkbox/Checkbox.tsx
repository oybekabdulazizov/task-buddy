import { ChangeEvent, FC, useState } from 'react';

import ICheckbox from './ICheckbox';

const Checkbox: FC<ICheckbox> = ({
  checked,
  name = 'checkbox',
  id = 'checkbox',
  disabled,
  classes,
  onChange,
}) => {
  const [c, setC] = useState(checked || false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checkBoxVal = e.target.checked;
    setC(checkBoxVal);
    onChange(checkBoxVal);
  };

  return (
    <input
      type='checkbox'
      id={id}
      name={name}
      checked={c}
      onChange={handleChange}
      className={`${classes}`}
      disabled={disabled}
    />
  );
};

export default Checkbox;
