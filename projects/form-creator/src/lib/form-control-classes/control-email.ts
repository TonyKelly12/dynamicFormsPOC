import { FormControlBase, formOptions } from '../models/form-control-base';

/**
 * Input field with "email" validation
 * Requires Bootsrap 4.* to properly Validate
 * (Works on Edge, Chrome, FireFox, Opera)
 *  */
export class InputEmail extends FormControlBase<string> {
  controlType = 'email';
  type: string;

  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);
    this.type = options['type'] || '';
    this.name = options['name'] || '';
  }
}
