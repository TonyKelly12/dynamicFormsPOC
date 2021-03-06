import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validator, ValidatorFn, Validators} from '@angular/forms';
import { FormControlBase } from '../models/form-control-base';

@Injectable({
  providedIn: 'root'
})
/**
 * Takes in form configs and returns a form specified to the configs and applies
 * configured Validation.
 */
export class FormControlService {
  constructor() { }

  /** Takes in form configs and returns a form specified to the configs and applies
   * configured Validation.
   */
  toFormGroup(formConfigs: FormControlBase<any>[] ) {
    let group: any = {};

    formConfigs.forEach(formConfig => {

      let vals:any= []

      // loops through each validation assigned to the fields config.
      // must be done in order for new FormControl function to see the
      // validators are the correct type.
      formConfig.validation.forEach(val$ => vals.push(val$))

      // checks to see if field has a validator, if so add validator.
      group[formConfig.key] = formConfig.validation.length != 0 ? new FormControl(formConfig.value || '', vals)
      // if field has no validators.
                                                                : new FormControl(formConfig.value || '');
    });
    return new FormGroup(group);
  }
}
