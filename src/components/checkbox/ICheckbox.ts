export default interface ICheckbox {
  checked: boolean;
  name?: string;
  id?: string;
  disabled?: boolean;
  classes?: string;
  onChange: (c: boolean) => void;
}
