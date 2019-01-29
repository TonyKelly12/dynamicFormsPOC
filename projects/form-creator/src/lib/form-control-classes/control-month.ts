import { FormControlBase, formOptions } from '../models/form-control-base';

/**
 * The <input type="month"> allows the user to select a month and year.
 * Depending on browser support, a date picker can show up in the input field.
 * # ( Only Works For Edge, Chrome, Opera)
 *  */
export class InputMonth extends FormControlBase<string> {
  controlType = 'month';
  name: string;

  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);

    this.name = options['name'] || '';
  }
}
