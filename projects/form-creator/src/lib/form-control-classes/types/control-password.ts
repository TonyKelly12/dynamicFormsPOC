import { FormControlBase, formOptions } from '../../models/form-control-base';

/**
 * <input type="password"> defines a password field:
 */
export class InputPassword extends FormControlBase<string> {
  controlType = 'password';
  type: string;
  name: string;

  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);
    this.type = options['type'] || '';
    this.name = options['name'] || '';
  }
}
