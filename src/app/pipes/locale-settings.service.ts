import { Injectable } from '@angular/core';

@Injectable()
export class LocaleSettingsService {

  constructor() { }

  getLocale() {
    return 'pt-BR';
  }

}
