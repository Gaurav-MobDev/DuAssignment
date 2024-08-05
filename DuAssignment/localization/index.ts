import {I18n}  from 'i18n-js';
 import en from './translations/en.json';
 import fr from './translations/fr.json'
export const i18n = new I18n();

i18n.store(en);
i18n.store(fr);