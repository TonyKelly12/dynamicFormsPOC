import { FormControlBase, formOptions } from '../models/form-control-base';

/**
 * Input field with "date" validation
 * Requires Bootsrap 4.* to properly Validate
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
