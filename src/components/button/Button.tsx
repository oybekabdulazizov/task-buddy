import { FC, ReactNode } from 'react';

interface IButton {
  title: string | ReactNode;
  classes: string;
  onClick?: (item?: any) => void;
}

const Button: FC<IButton> = ({
  title,
  classes,
  onClick,
}): string | ReactNode => {
  return (
    <button
      className={`border rounded-lg font-light text-md focus:outline-slate-200 ${classes}`}
      onClick={onClick}
      type='submit'
    >
      {title}
    </button>
  );
};

export default Button;
