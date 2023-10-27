import { FC } from 'react';

interface ILabel {
  text: string;
  classes?: string;
}

const Label: FC<ILabel> = ({ text, classes }) => {
  return (
    <label
      htmlFor={text}
      className={`w-full break-all py-3 px-3 text-sm rounded-lg ${classes}`}
    >
      {text}
    </label>
  );
};

export default Label;
