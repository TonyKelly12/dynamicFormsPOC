import { FormControlBase, formOptions } from '../models/form-control-base';

/**
 * The <input type="datetime-local"> specifies a date and time input field, with no time zone.
 * Depending on browser support, a date picker can show up in the input field.
 * (Works on Edge, Chrome, Opera)
 *  */
export class InputDateTime extends FormControlBase<string> {
  controlType = 'datetime-local';
  name: string;

  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);

    this.name = options['name'] || '';
  }
}
