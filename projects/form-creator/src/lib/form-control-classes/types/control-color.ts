import { FormControlBase, formOptions } from '../../models/form-control-base';

/**
 * The <input type="color"> is used for input fields that should contain a color.
 * Depending on browser support, a color picker can show up in the input field.
 * (Works on all Browsers)
 *  */
export class InputColor extends FormControlBase<string> {
  controlType = 'color';


  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);

    this.name = options['name'] || '';
  }
}
