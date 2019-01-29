import { formOptions } from './form-control-base';
export interface formOptions{
      id?: string,
      class?: string,
      value?: any ,
      name?: string,
      key?: string,
      label?: string,
      order?: number,
      controlType?: string,
      formGroup?: string,

      required?: boolean,
      disabled?: boolean,
      readonly?: boolean,
      autocomplete?: boolean,
      novalidate?: boolean,
      autofocus?: boolean,
      isValid?: boolean,
      checked?: boolean,

      alt?: string,
      validationError?: string,
      dropOptions?:{key: string, value: string}[],
      listName?:string,
      buttonLabel?:string,
      cols?: string,
      rows?: string,
      min?: string,
      max?: string,


      maxlength?: string,
      step?: string,
      size?: string,

      form?: string,
      action?: string,
      formaction?: string,
      formenctype?: string,
      formmethod?: string,
      formnovalidate?: string,
      formtarget?: string,
      onClick?: string,
}
/**
 * The List of HTML5 Attributes to add to elements
 */
export class FormControlBase<T> {
  id?: string;
      class?: string;
      /**
       * The value attribute specifies the initial value for an input field:
       */
      value?: any ;
      name?: string;
      key?: string;

      /**
       * Specifies the label that will be displayed abouve input field
       */
      label?: string;

      /**
       * Specifies the order in which the input will be displayed on page
       */
      order?: number;

      /** Specifies the input type. Example: "text", "radio" */
      controlType?: string;

      /** When using reactive forms, Specifies the form the input belongs to */
      formGroup?: string;

      /** Specifies if a input fiels is required to submit */
      required?: boolean;

      /**
       * The formenctype attribute specifies how the form data should be encoded when submitted (only for forms with method="post").
       * The formenctype attribute overrides the enctype attribute of the <form> element.
       * The formenctype attribute is used with type="submit" and type="image".
       */
      formenctype?: string;

      /**
       * The formmethod attribute defines the HTTP method for sending form-data to the action URL.
       * The formmethod attribute overrides the method attribute of the <form> element.
       * The formmethod attribute can be used with type="submit" and type="image".
       */
      formmethod?: string;

      /**
       * The formnovalidate attribute overrides the novalidate attribute of the <form> element.
       * The formnovalidate attribute can be used with type="submit".
       */
      formnovalidate?: string;

      /**
       * The formtarget attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form.
       * The formtarget attribute overrides the target attribute of the <form> element.
       * The formtarget attribute can be used with type="submit" and type="image".
       */
      formtarget?: string;


      /**
       * The disabled attribute specifies that the input field is disabled.
       * A disabled input field is unusable and un-clickable, and its value will not be sent when submitting the form:
       */
      disabled?: boolean;

      /**
       * The readonly attribute specifies that the input field is read only (cannot be changed):
       */
      readonly?: boolean;

      /**
       * The autocomplete attribute specifies whether a form or input field should have autocomplete on or off.
       * When autocomplete is on, the browser automatically completes the input values based on values that the user has entered before.
       * Tip: It is possible to have autocomplete "on" for the form, and "off" for specific input fields, or vice versa.
       * The autocomplete attribute works with <form> and the following <input> types: text, search, url, tel, email, password, datepickers, range, and color.
       */
      autocomplete?: boolean;

      /** The novalidate attribute is a <form> attribute.
       * When present, novalidate specifies that the form data should not be validated when submitted.
       **/
      novalidate?: boolean;

      /** The autofocus attribute specifies that the input field should automatically get focus when the page loads. */
      autofocus?: boolean;
      isValid?: boolean;
      checked?: boolean;

      alt?: string;
      validationError?: string;
      dropOptions?:{key: string, value: string}[];
      listName?:string;
      buttonLabel?:string;
      cols?: string;
      rows?: string;
      min?: string;
      max?: string;

      /** The maxlength attribute specifies the maximum allowed length for the input field: */
      maxlength?: string;
      step?: string;

      /** The autofocus attribute specifies that the input field should automatically get focus when the page loads. */
      size?: string;

     /**The form attribute specifies one or more forms an <input> element belongs to.
      * Tip: To refer to more than one form, use a space-separated list of form ids.
      * */
      form?: string;

      /**
     * specifies where to send the form-data when a form is submitted.
     * (All Browsers)
     */
      action?: string;

      /**
     * The formaction attribute specifies the URL of a file that will process the input control when the form is submitted.
     * The formaction attribute overrides the action attribute of the <form> element.
     * The formaction attribute is used with type="submit" and type="image"
     * (All Browsers)
     */
      formaction?: string;

       /**
     * onClick action for buttons.
     * Pass in the function to call as string
     */
      onClick?: string;

  constructor(options: formOptions = {})
    {
    this.id = options.id || '';
    this.class = options.class || '';
    this.key = options.key || '';
    this.value = options.value;
    this.name = options.name || '';
    this.label = options.label || '';
    this.formGroup = options.formGroup;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';

    // The !! Coerces Object to boolean. If it was falsey (e.g. 0, null, undefined, etc.), it will be false, otherwise, true.
    this.required = !!options.required;
    this.disabled = !!options.disabled;
    this.readonly = !!options.readonly;
    this.autocomplete = !!options.autocomplete;
    this.novalidate = !!options.novalidate;
    this.autofocus = !! options.autofocus;

    this.isValid = options.isValid || false;
    this.validationError = options.validationError || '';
    this.checked = options.checked || false;

    this.dropOptions = options.dropOptions;
    this.listName = options.listName;
    this.buttonLabel = options.buttonLabel;

    this.cols = options.cols;
    this.rows = options.rows;
    this.min = options.min;
    this.max = options.max;
    this.maxlength = options.maxlength;
    this.alt = options.alt;
    this.step = options.step;
    this.size = options.size;
    this.onClick = options.onClick;


    this.action = options.action;


    this.formaction = options.formaction;
  }

}
