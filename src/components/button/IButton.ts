import { ReactNode } from 'react';

export default interface IButton {
  title: ReactNode;
  classes?: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  onClick?: (item?: any) => void;
}
