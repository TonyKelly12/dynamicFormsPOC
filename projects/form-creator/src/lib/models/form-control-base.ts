export class FormControlBase<T> {
  options:{}
  value: T;
  name: string;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  isValid: boolean;
  validationError: string;
  checked: boolean;
  formGroup: string;

  constructor(options: {
      value?: T,
      name?: string
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      isValid?: boolean,
      validationError?: string,
      checked?: boolean
      formGroup?: string
    } = {}) {
    this.value = options.value;
    this.name = options.name || '';
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.isValid = options.isValid || false;
    this.validationError = options.validationError || '';
    this.checked = options.checked || false;
    this.formGroup = options.formGroup;
  }
}
