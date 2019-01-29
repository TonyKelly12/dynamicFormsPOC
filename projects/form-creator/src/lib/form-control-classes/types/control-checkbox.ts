import { FormControlBase } from '../../models/form-control-base';

/**
 * <input type="checkbox"> defines a checkbox.
 * Checkboxes let a user select ZERO or MORE options of a limited number of choices.
 */
export class InputCheckbox extends FormControlBase<string> {
  controlType = 'checkbox';
  name: string;
  value: string;
  checked: boolean;

  constructor(options: {} = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);
    this.name = options['name'] || '';
    this.value = options['value'] || '';
    this.checked = options['checked'] || false;

  }
}
