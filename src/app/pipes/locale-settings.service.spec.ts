import { TestBed, inject } from '@angular/core/testing';

import { LocaleSettingsService } from './locale-settings.service';

describe('LocaleSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocaleSettingsService]
    });
  });

  it('should be created', inject([LocaleSettingsService], (service: LocaleSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
