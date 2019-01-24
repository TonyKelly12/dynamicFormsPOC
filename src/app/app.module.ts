import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { AppComponent }                 from './app.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import {FormCreatorModule} from '../../projects/form-creator/src/lib/form-creator.module';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, FormCreatorModule ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
