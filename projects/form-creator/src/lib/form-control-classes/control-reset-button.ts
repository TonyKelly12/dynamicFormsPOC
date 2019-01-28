import { FormControlBase } from '../models/form-control-base';

export class InputResetButton extends FormControlBase<string> {
  controlType = 'reset';
  buttonLabel: string;

  constructor(options: {} = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);

    this.buttonLabel = options['buttonLabel'];
  }
}
