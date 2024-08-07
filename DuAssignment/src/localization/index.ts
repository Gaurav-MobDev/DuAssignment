import {I18n} from 'i18n-js';
import {I18nManager} from 'react-native';
import {en} from './translations';
import {ar} from './translations';

const i18n = new I18n();
i18n.translations = {
  en,
  ar,
};

I18nManager.forceRTL(i18n.locale === 'ar');

export {i18n};
