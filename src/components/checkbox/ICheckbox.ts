import { ChangeEvent } from 'react';

export default interface ICheckbox {
  id?: string;
  checked: boolean;
  disabled?: boolean;
  classes?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
