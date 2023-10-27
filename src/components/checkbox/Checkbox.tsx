import { ChangeEvent, FC, ReactNode } from 'react';

interface ICheckbox {
  id: string;
  checked: boolean;
  classes?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<ICheckbox> = ({
  id,
  checked,
  classes,
  onChange,
}): string | ReactNode => {
  return (
    <input
      type='checkbox'
      id={id || ''}
      checked={checked}
      onChange={onChange}
      className={`${classes}`}
    />
  );
};

export default Input;
