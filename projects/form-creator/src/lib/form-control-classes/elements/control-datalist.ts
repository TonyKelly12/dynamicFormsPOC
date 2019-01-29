import { FormControlBase } from '../../models/form-control-base';

/**
 * The <datalist> element specifies a list of pre-defined options for an <input> element.
 * Users will see a drop-down list of the pre-defined options as they input data.
 * ### The list attribute of the <input> element, must refer to the id attribute of the <datalist> element.
 * To define a pre-selected option, add the selected attribute to the option:
 * ### Use the size attribute to specify the number of visible values:
 * ### Use the multiple attribute to allow the user to select more than one value:
 */
export class DatalistControl extends FormControlBase<string> {
  controlType = 'datalist';
  dropOptions: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    // Because this class derived from FormControlBase must call super and pass in options
    super(options);
    this.dropOptions = options['dropOptions'] || [];
  }
}
