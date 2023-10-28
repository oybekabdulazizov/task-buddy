import { ChangeEvent } from 'react';

export default interface IInput {
  value: string | number;
  type?: 'text' | 'number' | 'date' | 'email' | 'password' | 'file' | 'url';
  id?: string;
  hidden?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  classes?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
