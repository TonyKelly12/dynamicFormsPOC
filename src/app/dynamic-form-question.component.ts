import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FormControlBase } from 'projects/form-creator/src/lib/models/form-control-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() config: FormControlBase<any>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.config.key].valid; }


}
