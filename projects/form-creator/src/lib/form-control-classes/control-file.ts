import { FormControlBase, formOptions } from '../models/form-control-base';

/**
 * Input field with "email" validation
 * Requires Bootsrap 4.* to properly Validate
 *  */
export class InputFile extends FormControlBase<string> {
  controlType = 'file';
  name: string;

  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);

    this.name = options['name'] || '';
  }
}
