import { Injectable }       from '@angular/core';

import { FormControlBase} from '../models/form-control-base';
import { InputTextBox } from './../form-control-classes/control-textBox';
import {DropdownControl } from '../form-control-classes/control-dropdown'
import { InputRadio } from '../form-control-classes/control-radio';

@Injectable()
export class MockFormConfigService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let configs: FormControlBase<any>[] = [

      new DropdownControl({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'ehh',  value: 'Ehh'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new InputTextBox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new InputRadio({
        key: 'emailAddress',
        label: 'Email',
        checked: false,
        value: 'Yes',
        name: 'email',
        order: 2
      })
    ];

    return configs.sort((a, b) => a.order - b.order);
  }
}
