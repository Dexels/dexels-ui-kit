/* eslint-disable sort-keys */
import { Theme } from '../../../types';
import { themeCyrillic } from './cyrillic';
import { themeDark } from './dark';

/* eslint-disable sort-keys */
export const themeCyrillicDark: Theme = {
    ...themeDark,

    colorAlert: themeCyrillic.colorAlert,
    colorInvalid: themeCyrillic.colorInvalid,
    colorValid: themeCyrillic.colorValid,

    fontFamilyPrimary: themeCyrillic.fontFamilyPrimary,
    fontFamilySecondary: themeCyrillic.fontFamilySecondary,
    textStyles: { ...themeCyrillic.textStyles },
};
/* eslint-enable */
