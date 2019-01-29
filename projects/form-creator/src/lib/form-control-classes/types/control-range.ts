import { FormControlBase, formOptions } from '../../models/form-control-base';

/**
 * The <input type="range"> defines a control for entering a number whose exact value is not important (like a slider control).
 * Default range is 0 to 100. However, you can set restrictions on what numbers are accepted with the min, max, and step attributes:
 *  */
export class InputRange extends FormControlBase<string> {
  controlType = 'range';
  name: string;
  min: string;
  max: string;
  step: string;

  constructor(options: formOptions = {}) {
     // Because this class derived from FormControlBase must call super and pass in options
    super(options);

    this.name = options['name'] || '';
    this.min = options['min'];
    this.max = options['max'];
    this.step = options['step'];
  }
}
