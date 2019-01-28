import { FormControlBase } from '../models/form-control-base';

export class InputTextArea extends FormControlBase<string> {
  controlType = 'textarea';
  type: string;

  constructor(options: {} = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);
    this.type = options['type'] || '';
  }
}
