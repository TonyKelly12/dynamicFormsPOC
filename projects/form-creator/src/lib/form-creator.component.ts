import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FormControlBase } from 'projects/form-creator/src/lib/models/form-control-base';

@Component({
  selector: 'form-creator',
  templateUrl: './form-creator.component.html',
})
export class FormCreatorComponent {
  @Input() config: FormControlBase<any>;
  @Input() form: FormGroup;

  // Getter for the property isValid to verify if form is valid for submission
  get isValid() { return this.form.controls[this.config.key].valid; }
}
