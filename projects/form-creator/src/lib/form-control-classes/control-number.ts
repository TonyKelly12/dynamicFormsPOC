import { FormControlBase, formOptions } from '../models/form-control-base';

/**
 * The <input type="number"> defines a numeric input field.
 * You can also set restrictions on what numbers are accepted.
 * The following example displays a numeric input field, where you can enter a value from 1 to 5:
 *  */
export class InputNumber extends FormControlBase<string> {
  controlType = 'number';
  name: string;

  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);

    this.name = options['name'] || '';
  }
}
