import { FormControlBase } from '../models/form-control-base';
export class DropdownControl extends FormControlBase<string> {
  controlType = 'dropdown';
  dropOptions: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    // Because this class derived from FormControlBase must call super and pass in options
    super(options);
    this.dropOptions = options['dropOptions'] || [];
  }
}
