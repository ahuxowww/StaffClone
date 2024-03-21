import {I18n} from 'i18n-js';
import locales from './locales';

const i18n = new I18n(locales);

i18n.defaultLocale = 'en';
i18n.translations = locales;
i18n.enableFallback = true;

export default i18n;
