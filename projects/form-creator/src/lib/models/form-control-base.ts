import { formOptions } from './form-control-base';
export interface formOptions{
      id?: string,
      class?: string,
      value?: any ,
      name?: string,
      key?: string,
      label?: string,
      required?: boolean,
      disabled?: boolean,
      readonly?: boolean,
      order?: number,
      controlType?: string,
      isValid?: boolean,
      validationError?: string,
      checked?: boolean,
      formGroup?: string,
      cols?: string,
      rows?: string,
      dropOptions?:{key: string, value: string}[],
      listName?:string,
      buttonLabel?:string,
      min?: string,
      max?: string,
      maxlength?: string,
      onClick?: string,
      alt?: string,
      step?: string,
      size?: string


}

export class FormControlBase<T> {
  id?: string;
  class?: string;
  dropOptions?:{key: string, value: string}[];
  value?: T;
  name?: string;
  key?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  order?: number;
  controlType?: string;
  isValid?: boolean;
  validationError?: string;
  checked?: boolean;
  formGroup?: string;
  cols?: string;
  rows?: string;
  listName?:string;
  buttonLabel?:string;
  maxlength?: string;
  min?: string;
  max?: string;
  onClick?: string;
  alt?: string;
  step?: string;
  size?: string;

  constructor(options: formOptions = {})
    {
    this.id = options.id || '';
    this.class = options.class || '';
    this.key = options.key || '';
    this.value = options.value;
    this.name = options.name || '';
    this.label = options.label || '';
    this.formGroup = options.formGroup;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';

    this.required = !!options.required;
    this.disabled = !!options.disabled;
    this.readonly = !!options.readonly;

    this.isValid = options.isValid || false;
    this.validationError = options.validationError || '';
    this.checked = options.checked || false;

    this.dropOptions = options.dropOptions;
    this.listName = options.listName;
    this.buttonLabel = options.buttonLabel;

    this.cols = options.cols;
    this.rows = options.rows;
    this.min = options.min;
    this.max = options.max;
    this.maxlength = options.maxlength;
    this.alt = options.alt;
    this.step = options.step;
    this.size = options.size;
    this.onClick = options.onClick;
  }
}
