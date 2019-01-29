import { FormControlBase, formOptions } from '../models/form-control-base';

/**
 * Input field with "week" validation
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
