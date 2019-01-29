import { FormControlBase, formOptions } from "../../models/form-control-base";

/**
 * The <output> element represents the result of a calculation (like one performed by a script).
 */
export class OutputControl extends FormControlBase<string> {
  controlType = "output";
  type: string;
  name: string;
  for: string;

  constructor(options: formOptions = {}) {
    // Because this class derived from FormControlBase must call super and pass in options
    super(options);
    this.type = options["type"] || "";
    this.name = options["name"] || "";
    this.for = options["for"] || "";


  }
}
