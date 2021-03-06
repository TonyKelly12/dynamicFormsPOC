import { FormControlBase } from '../../models/form-control-base';

/**
 * The <select> element defines a drop-down list:
 * The <option> elements defines an option that can be selected.
 * By default, the first item in the drop-down list is selected.
 * To define a pre-selected option, add the selected attribute to the option:
 * ### Use the "size" attribute to specify the number of visible values:
 * ### Use the "multiple" attribute to allow the user to select more than one value:
 */
export class FieldsetControl extends FormControlBase<string> {
  controlType = 'fieldset';
  inputs: FormControlBase<any>[] ;
  label: string;
  legend: boolean;
  legendLabel: string;

  constructor(options: {} = {}) {
    // Because this class derived from FormControlBase must call super and pass in options
    super(options);
    this.dropOptions = options['dropOptions'] || [];
    this.inputs = options['inputs'] || [];
    this.label = options['label'] || '';
    this.legend = options['legend'] || false;
    this.legendLabel = options['legendLabel'] || '';
    }
}
