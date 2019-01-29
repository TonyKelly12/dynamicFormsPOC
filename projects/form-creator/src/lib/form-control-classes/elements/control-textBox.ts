import { FormControlBase } from '../../models/form-control-base';

/**
 * <input type="text"> defines a one-line text input field:
 */
export class InputTextBox extends FormControlBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);
    this.type = options['type'] || '';
  }
}
