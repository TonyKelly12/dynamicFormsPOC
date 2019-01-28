
import { FormControlService } from './../../projects/form-creator/src/lib/services/form-control.service';
import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { FormControlBase } from 'projects/form-creator/src/lib/models/form-control-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ FormControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() configs: FormControlBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private fcs: FormControlService) {  }

   ngOnInit() {
    this.form = this.fcs.toFormGroup(this.configs);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
