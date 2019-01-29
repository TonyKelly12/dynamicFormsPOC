import { FormControlBase, formOptions } from '../models/form-control-base';

/**
 * <input type="radio"> defines a radio button.
 * Radio buttons let a user select ONLY ONE of a limited number of choices:
 */
export class InputRadio extends FormControlBase<string> {
  controlType = 'radio';
  name: string;
  value: string;
  checked: boolean;

  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);
    this.name = options['name'] || '';
    this.value = options['value'] || '';
    this.checked = options['checked'] || false;

  }
}
