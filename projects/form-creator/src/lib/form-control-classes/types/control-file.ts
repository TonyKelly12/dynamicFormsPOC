import { FormControlBase, formOptions } from '../../models/form-control-base';

/**
 * The <input type="file"> defines a file-select field and a "Browse" button for file uploads.
 * ** Works on all Browsers**
 *  */
export class InputFile extends FormControlBase<string> {
  controlType = 'file';
  name: string;

  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);

    this.name = options['name'] || '';
  }
}
