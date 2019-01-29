import { FormControlBase, formOptions } from '../models/form-control-base';

/**
 * The <input type="time"> allows the user to select a time (no time zone).
 * Depending on browser support, a time picker can show up in the input field.
 *
 *  */
export class InputTime extends FormControlBase<string> {
  controlType = 'time';
  name: string;

  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);

    this.name = options['name'] || '';
  }
}
