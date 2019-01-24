import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlBase } from '../models/form-control-base';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {
  constructor() { }

  toFormGroup(formConfigs: FormControlBase<any>[] ) {
    let group: any = {};

    formConfigs.forEach(formConfig => {
      // checks to see if field is required, if so add validator reqired if no value is passed
      group[formConfig.key] = formConfig.required ? new FormControl(formConfig.value || '', Validators.required)
      // if field is not required then set to value or empty string.
                                              : new FormControl(formConfig.value || '');
    });
    return new FormGroup(group);
  }
}
