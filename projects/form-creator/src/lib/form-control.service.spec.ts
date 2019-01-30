import { TestDataService } from '../test-data.service';
import { TestBed } from '@angular/core/testing';

import { FormControlService } from './services/form-control.service';
import { FormGroup } from '@angular/forms';

describe('FormCreatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormControlService = TestBed.get(FormControlService);
    expect(service).toBeTruthy();
  });

  it('should take in a set of form configs and return a form group from thoes configs', () =>{
    const service: FormControlService = TestBed.get(FormControlService);
    const dataService: TestDataService = TestBed.get(TestDataService);
    const formConfigs = dataService.getFormConfigs();
    const form = service.toFormGroup(formConfigs)
    expect(form).toBeDefined()
  })
});
