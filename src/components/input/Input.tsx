import { ChangeEvent, FC, ReactNode } from 'react';

interface IInput {
  value: string;
  classes?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IInput> = ({
  value,
  classes,
  onChange,
}): string | ReactNode => {
  return (
    <input
      type='text'
      value={value}
      placeholder='e.g. Tidy up the room'
      onChange={onChange}
      className={`py-3 px-3 text-sm w-full focus:outline-none rounded-lg ${classes}`}
    />
  );
};

export default Input;
