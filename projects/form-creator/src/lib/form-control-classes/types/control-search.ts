import { FormControlBase, formOptions } from '../../models/form-control-base';

/**
 * The <input type="search"> is used for search fields (a search field behaves like a regular text field).
 *  */
export class InputSearch extends FormControlBase<string> {
  controlType = 'search';
  name: string;

  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);

    this.name = options['name'] || '';
  }
}
