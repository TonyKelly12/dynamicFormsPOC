import { FormControlBase, formOptions } from '../models/form-control-base';

/**
 * Input field with "email" validation
 * Requires Bootsrap 4.* to properly Validate
 *  */
export class InputSearch extends FormControlBase<string> {
  controlType = 'search';
  name: string;

  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);

    this.name = options['name'] || '';
  }
}
