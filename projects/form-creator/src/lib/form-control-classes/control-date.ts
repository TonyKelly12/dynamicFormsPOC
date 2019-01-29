import { FormControlBase, formOptions } from '../models/form-control-base';

/**
 * The <input type="date"> is used for input fields that should contain a date.
 * Depending on browser support, a date picker can show up in the input field.
 * # You can also use the min and max attributes to add restrictions to dates:
 * (Works on Edge, FireFox, Chrome, Opera)
 *  */
export class InputDate extends FormControlBase<string> {
  controlType = 'date';
  name: string;

  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);

    this.name = options['name'] || '';
  }
}
