import { FC } from 'react';

import IButton from './IButton';

const Button: FC<IButton> = ({
  title,
  classes,
  type = 'submit',
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={`border rounded-lg font-light text-md focus:outline-slate-200 ${classes}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
