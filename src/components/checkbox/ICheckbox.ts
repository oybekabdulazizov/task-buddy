import { ChangeEvent } from 'react';

export default interface ICheckbox {
  checked: boolean;
  name?: string;
  id?: string;
  disabled?: boolean;
  classes?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
