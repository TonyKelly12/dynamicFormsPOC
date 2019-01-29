import { OutputControl } from './../form-control-classes/elements/control-output';
import { InputURL } from '../form-control-classes/types/control-url';
import { Injectable }       from '@angular/core';

import { FormControlBase} from '../models/form-control-base';
import { InputTextBox } from '../form-control-classes/elements/control-textBox';
import {DropdownControl } from '../form-control-classes/elements/control-dropdown'
import { InputRadio } from '../form-control-classes/types/control-radio';
import { InputTextArea } from '../form-control-classes/elements/control-textarea';
import { InputCheckbox } from '../form-control-classes/types/control-checkbox';
import { InputPassword } from '../form-control-classes/types/control-password';
import { InputEmail } from '../form-control-classes/types/control-email';
import { InputSubmitButton } from '../form-control-classes/types/control-submit-button';
import { InputColor } from '../form-control-classes/types/control-color';
import { InputDate } from '../form-control-classes/types/control-date';
import { InputFile } from '../form-control-classes/types/control-file';
import { InputDateTime } from '../form-control-classes/types/control-datetime';
import { InputSearch } from '../form-control-classes/types/control-search';
import { InputPhone } from '../form-control-classes/types/control-phone';
import { InputTime } from '../form-control-classes/types/control-time';
import { InputWeek } from '../form-control-classes/types/control-week';
import { InputRange } from '../form-control-classes/types/control-range';
import { Validators } from '@angular/forms';

@Injectable()
/** Mock Form config file */
export class MockFormConfigService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous

  /** Gets mock Form Config Data */
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
        validation:[Validators.required],
        order: 1
      }),

      new InputEmail({
        key: 'lastName',
        label: 'Last Name',
        value: 'Bomb',
        validation:[Validators.required],
        order: 7
      }),

      new InputPassword({
        key: 'password',
        label: 'Password',
        validation:[Validators.required, Validators.minLength(5)],
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
        validation:[Validators.required],
        order: 5
      }),

      new InputColor({
        key: 'color',
        label: 'Choose Color',
        order: 8
      }),

      new InputDate({
        key: 'date',
        label: 'Choose Date',
        order: 9
      }),

      new InputFile({
        key: 'file',
        label: 'Choose a file',
        order: 10
      }),

      new InputDateTime({
        key: 'datetime',
        label: 'Choose Date',
        order: 11
      }),

      new InputSearch({
        key: 'search',
        label: 'Search',
        order: 12
      }),

      new InputTime({
        key: 'time',
        label: 'Time',
        order: 13
      }),

      new InputURL({
        key: 'url',
        label: 'URL',
        order: 14
      }),

      new InputWeek({
        key: 'week',
        label: 'Week',
        order: 15
      }),

      new InputRange({
        key: 'range',
        label: 'Range',
        order: 15,
        min: "0",
        max: "35",
        id: "range"
      }),

      new OutputControl({
        key: 'output',
        label: 'Slider Value',
        order: 16,
        for: "range",
        name: "x"
      })

    ];
    return configs.sort((a, b) => a.order - b.order);
  }
}
