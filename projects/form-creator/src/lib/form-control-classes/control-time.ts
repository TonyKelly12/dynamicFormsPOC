import { FormControlBase, formOptions } from '../models/form-control-base';

/**
 * Input field with "time" validation
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
