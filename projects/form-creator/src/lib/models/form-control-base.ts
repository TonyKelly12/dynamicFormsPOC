import { formOptions } from './form-control-base';
export interface formOptions{
      value?: any ,
      name?: string,
      key?: string,
      label?: string,
      required?: boolean,
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
      buttonLabel?:string

}

export class FormControlBase<T> {
  dropOptions:{key: string, value: string}[];
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
  cols: string;
  rows: string;
  listName:string;
  buttonLabel:string;


  constructor(options: formOptions = {})
    {
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
    this.cols = options.cols;
    this.rows = options.rows;
    this.dropOptions = options.dropOptions;
    this.listName = options.listName;
    this.buttonLabel = options.buttonLabel;
  }
}
