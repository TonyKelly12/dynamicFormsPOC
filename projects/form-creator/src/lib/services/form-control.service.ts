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

      let vals = []
      formConfig.validation.forEach(val$ => vals.push(val$))

      // checks to see if field has a validator, if so add validator.
      group[formConfig.key] = formConfig.validation.length != 0 ? new FormControl(formConfig.value || '', vals)
      // if field has no validators.
                                              : new FormControl(formConfig.value || '');
    });
    return new FormGroup(group);
  }
}
