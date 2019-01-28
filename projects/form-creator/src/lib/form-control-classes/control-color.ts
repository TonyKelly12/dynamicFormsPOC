import { FormControlBase, formOptions } from '../models/form-control-base';

/**
 * Color Input field
 *  */
export class InputColor extends FormControlBase<string> {
  controlType = 'color';


  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);

    this.name = options['name'] || '';
  }
}
