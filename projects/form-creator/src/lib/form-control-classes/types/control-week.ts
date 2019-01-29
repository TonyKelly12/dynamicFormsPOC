import { FormControlBase, formOptions } from '../../models/form-control-base';

/**
 * The <input type="week"> allows the user to select a week and year.
 * Depending on browser support, a date picker can show up in the input field.
 *
 *  */
export class InputWeek extends FormControlBase<string> {
  controlType = 'week';
  name: string;

  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);

    this.name = options['name'] || '';
  }
}
