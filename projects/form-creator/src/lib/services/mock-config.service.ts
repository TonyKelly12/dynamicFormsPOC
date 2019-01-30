import { OutputControl } from "./../form-control-classes/elements/control-output";
import { InputURL } from "../form-control-classes/types/control-url";
import { Injectable } from "@angular/core";

import { FormControlBase } from "../models/form-control-base";
import { InputTextBox } from "../form-control-classes/elements/control-textBox";
import { DropdownControl } from "../form-control-classes/elements/control-dropdown";
import { InputRadio } from "../form-control-classes/types/control-radio";
import { InputTextArea } from "../form-control-classes/elements/control-textarea";
import { InputCheckbox } from "../form-control-classes/types/control-checkbox";
import { InputPassword } from "../form-control-classes/types/control-password";
import { InputEmail } from "../form-control-classes/types/control-email";
import { InputSubmitButton } from "../form-control-classes/types/control-submit-button";
import { InputColor } from "../form-control-classes/types/control-color";
import { InputDate } from "../form-control-classes/types/control-date";
import { InputFile } from "../form-control-classes/types/control-file";
import { InputDateTime } from "../form-control-classes/types/control-datetime";
import { InputSearch } from "../form-control-classes/types/control-search";
import { InputPhone } from "../form-control-classes/types/control-phone";
import { InputTime } from "../form-control-classes/types/control-time";
import { InputWeek } from "../form-control-classes/types/control-week";
import { InputRange } from "../form-control-classes/types/control-range";
import { Validators } from "@angular/forms";
import { FieldsetControl } from "../form-control-classes/elements/control-fieldset";

@Injectable()
/** Mock Form config file */
export class MockFormConfigService {
  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous

  /** Gets mock Form Config Data */
  getFormConfigs() {
    let configs: FormControlBase<any>[] = [
      new DropdownControl({
        key: "brave",
        id: "brave",
        label: "Bravery Rating",
        dropOptions: [
          { key: "ehh", value: "Ehh" },
          { key: "great", value: "Great" },
          { key: "good", value: "Good" },
          { key: "unproven", value: "Unproven" }
        ],
        order: 4
      }),

      new InputTextBox({
        key: "firstName",
        id:"firstName",
        label: "First name",
        value: "Bombasto",
        validation: [Validators.required],
        order: 1
      }),

      new InputEmail({
        key: "lastName",
        id: "lastName",
        label: "Last Name",
        value: "Bomb",
        validation: [Validators.required],
        order: 7
      }),

      new InputPassword({
        key: "password",
        id: "password",
        label: "Password",
        validation: [Validators.required, Validators.minLength(5)],
        order: 6
      }),

      new InputSubmitButton({
        key: "submit",
        id: "submit",
        buttonLabel: "Submit Me",
        order: 8
      }),

      new InputSubmitButton({
        key: "rest",
        id: "rest",
        buttonLabel: "Reset Me",
        order: 9
      }),

      new InputRadio({
        key: "emailAddress",
        id: "emailAddress",
        label: "Email",
        checked: false,
        value: "Yes",
        name: "email",
        order: 2
      }),

      new InputCheckbox({
        key: "checking",
        id: "checking",
        checked: true,
        value: "Yes",
        name: "checking",
        order: 3
      }),

      new InputTextArea({
        key: "description",
        id: "description",
        value: "Write Description here",
        validation: [Validators.required],
        order: 5
      }),

      new InputColor({
        key: "color",
        id: "color",
        label: "Choose Color",
        order: 8
      }),

      new InputDate({
        key: "date",
        id: "date",
        label: "Choose Date",
        order: 9
      }),

      new InputFile({
        key: "file",
        id: "file",
        label: "Choose a file",
        order: 10
      }),

      new InputDateTime({
        key: "datetime",
        id: "datetime",
        label: "Choose Date",
        order: 11
      }),

      new InputSearch({
        key: "search",
        id: "search",
        label: "Search",
        order: 12
      }),

      new InputTime({
        key: "time",
        id: "time",
        label: "Time",
        order: 13
      }),

      new InputURL({
        key: "url",
        id: "url",
        label: "URL",
        order: 14
      }),

      new InputWeek({
        key: "week",
        id: "week",
        label: "Week",
        order: 15
      }),

      new InputRange({
        key: "range",
        id: "range",
        label: "Range",
        order: 15,
        min: "0",
        max: "35",

      }),

      new OutputControl({
        key: "output",
        id: "output",
        label: "Slider Value",
        order: 16,
        for: "range",
        name: "x"
      }),

      new FieldsetControl({
        key: "fieldset",
        id: "fieldset",
        label: "Will See in Legend",
        order: 17,
        inputs: [
          new InputTextBox({
            key: "firstName",
            id: "fName",
            label: "First name",
            value: "Bombasto",
            validation: [Validators.required]
          }),

          new InputRadio({
            key: "emailAddress",
            id: "eAddress",
            label: "Email",
            checked: false,
            value: "Yes",
            name: "email"
          })
        ]
      })
    ];
    return configs.sort((a, b) => a.order - b.order);
  }
}
