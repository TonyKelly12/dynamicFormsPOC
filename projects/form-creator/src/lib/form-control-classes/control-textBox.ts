import { FormControlBase } from '../models/form-control-base';

export class InputTextBox extends FormControlBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
