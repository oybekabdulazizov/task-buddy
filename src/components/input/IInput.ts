export default interface IInput {
  value: string;
  type?: 'text' | 'email' | 'password' | 'url';
  name?: string;
  id?: string;
  hidden?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  classes?: string;
  onChange: (val: string) => void;
}
