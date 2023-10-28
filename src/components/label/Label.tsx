import { FC } from 'react';

import ILabel from './ILabel';

const Label: FC<ILabel> = ({ text, htmlFor, classes }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`w-full break-all py-3 px-3 text-sm rounded-lg ${classes}`}
    >
      {text}
    </label>
  );
};

export default Label;
