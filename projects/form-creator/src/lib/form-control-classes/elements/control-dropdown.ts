import { FormControlBase } from '../../models/form-control-base';

/**
 * The <select> element defines a drop-down list:
 * The <option> elements defines an option that can be selected.
 * By default, the first item in the drop-down list is selected.
 * To define a pre-selected option, add the selected attribute to the option:
 * # Use the size attribute to specify the number of visible values:
 * # Use the multiple attribute to allow the user to select more than one value:
 */
export class DropdownControl extends FormControlBase<string> {
  controlType = 'dropdown';
  dropOptions: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    // Because this class derived from FormControlBase must call super and pass in options
    super(options);
    this.dropOptions = options['dropOptions'] || [];
  }
}
