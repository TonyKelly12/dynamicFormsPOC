import { MockFormConfigService } from './mock-config.service';
import { Component }       from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [configs]="formConfigs"></app-dynamic-form>
    </div>
  `,
  providers:  [MockFormConfigService]
})
export class AppComponent {
  formConfigs: any[];

  constructor(service: MockFormConfigService) {
    this.formConfigs = service.getFormConfigs();
  }
}
