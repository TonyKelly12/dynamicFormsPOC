import { FormControlBase, formOptions } from '../models/form-control-base';

/**
 * The <input type="url"> is used for input fields that should contain a URL address.
 * Depending on browser support, the url field can be automatically validated when submitted.
 * Some smartphones recognize the url type, and adds ".com" to the keyboard to match url input.
 *  */
export class InputURL extends FormControlBase<string> {
  controlType = 'url';
  name: string;

  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);

    this.name = options['name'] || '';
  }
}
