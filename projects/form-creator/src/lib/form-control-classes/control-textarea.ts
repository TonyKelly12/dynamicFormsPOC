import { FormControlBase, formOptions } from "../models/form-control-base";

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
