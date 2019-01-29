import { FormControlBase, formOptions } from "../../models/form-control-base";

/**
 * The <textarea> element defines a multi-line input field (a text area):
 * ### The "rows" attribute specifies the visible number of lines in a text area.
 * ### The "cols" attribute specifies the visible width of a text area.
 */
export class InputTextArea extends FormControlBase<string> {
  controlType = "textarea";
  type: string;
  name: string;

  constructor(options: formOptions = {}) {
    // Because this class derived from FormControlBase must call super and pass in options
    super(options);
    this.type = options["type"] || "";
    this.cols = options["cols"] || "";
    this.rows = options["rows"] || "";
    this.name = options["name"] || "";

  }
}
