import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCreatorComponent } from './form-creator.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [FormCreatorComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap:[FormCreatorComponent],
  exports: [FormCreatorComponent]
})
export class FormCreatorModule { }
