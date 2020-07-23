import { Locale } from '../../types';

export const convertLocale = (locale: Locale): string => {
    switch (locale) {
        case Locale.BE:
            return 'be-BE';

        case Locale.DE:
            return 'de-DE';

        case Locale.EN:
            return 'en-EN';

        case Locale.FR:
            return 'fr-FR';

        case Locale.GB:
            return 'en-GB';

        case Locale.KZ:
            return 'kz-KZ';

        case Locale.RU:
            return 'ru-RU';

        case Locale.UK:
            return 'en-GB';

        case Locale.US:
            return 'en-US';

        default:
            return 'nl-NL';
    }
};

export default convertLocale;
