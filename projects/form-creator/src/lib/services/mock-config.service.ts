import { Injectable }       from '@angular/core';

import { FormControlBase} from '../models/form-control-base';
import { InputTextBox } from './../form-control-classes/control-textBox';
import {DropdownControl } from '../form-control-classes/control-dropdown'
import { InputRadio } from '../form-control-classes/control-radio';
import { InputTextArea } from '../form-control-classes/control-textarea';
import { InputCheckbox } from '../form-control-classes/control-checkbox';
import { InputPassword } from '../form-control-classes/control-password';
import { InputEmail } from '../form-control-classes/control-email';
import { InputSubmitButton } from '../form-control-classes/control-submit-button';
import { InputColor } from '../form-control-classes/control-color';

@Injectable()
export class MockFormConfigService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getFormConfigs() {

    let configs: FormControlBase<any>[] = [

      new DropdownControl({
        key: 'brave',
        label: 'Bravery Rating',
        dropOptions: [
          {key: 'ehh',  value: 'Ehh'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 4
      }),

      new InputTextBox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new InputEmail({
        key: 'lastName',
        label: 'Last Name',
        value: 'Bomb',
        required: true,
        order: 7
      }),

      new InputPassword({
        key: 'password',
        label: 'Password',
        required: true,
        order: 6
      }),

      new InputSubmitButton({
        key: 'submit',
        buttonLabel: 'Submit Me',
        order: 8
      }),

      new InputSubmitButton({
        key: 'rest',
        buttonLabel: 'Reset Me',
        order: 9
      }),

      new InputRadio({
        key: 'emailAddress',
        label: 'Email',
        checked: false,
        value: 'Yes',
        name: 'email',
        order: 2
      }),

      new InputCheckbox({
        key: 'checking',
        label: 'Yes?',
        checked: true,
        value: 'Yes',
        name: 'checking',
        order: 3
      }),

      new InputTextArea({
        key: 'description',
        label: 'Description',
        value: 'Write Description here',
        required: false,
        order: 5

      }),
      new InputColor({
        key: 'color',
        label: 'Choose Color',
        required: false,
        order: 8

      }),

    ];

    return configs.sort((a, b) => a.order - b.order);
  }
}
