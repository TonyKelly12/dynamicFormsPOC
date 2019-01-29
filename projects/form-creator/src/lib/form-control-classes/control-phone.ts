import { FormControlBase, formOptions } from '../models/form-control-base';

/**
 * Input field with "phone" validation
 * (Only works with Safari 8 and newer)
 *  */
export class InputPhone extends FormControlBase<string> {
  controlType = 'tel';
  name: string;

  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);

    this.name = options['name'] || '';
  }
}
