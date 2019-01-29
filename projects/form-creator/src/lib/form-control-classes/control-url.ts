import { FormControlBase, formOptions } from '../models/form-control-base';

/**
 * Input field with "time" validation
 *
 *  */
export class InputURL extends FormControlBase<string> {
  controlType = 'url';
  name: string;

  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);

    this.name = options['name'] || '';
  }
}
