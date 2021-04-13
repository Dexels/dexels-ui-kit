/* eslint-disable radix */
import { DEFAULT_DATE_FORMAT, DEFAULT_LOCALE } from '../../../global/constants';
import moment, { Moment } from 'moment';

export const isValidStringDate = (inputText: string): boolean => {
    // eslint-disable-next-line max-len
    const dateFormatRegExp = /^([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})/;
    const dateWithTimezoneRegExp = /\d{4}-[0-1]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\+\d{4}/;

    return dateWithTimezoneRegExp.test(inputText) || dateFormatRegExp.test(inputText);
};

export const isValidDate = (
    value: string | Date | Moment,
    lang: string = DEFAULT_LOCALE,
    format = DEFAULT_DATE_FORMAT
): boolean => {
    if (typeof value === 'string' && !isValidStringDate(value)) {
        return moment.parseZone(value).inspect().includes('moment.parseZone');
    }

    return (
        (typeof value === 'string' && moment(value, format).locale(lang.toLowerCase()).isValid()) ||
        moment.isMoment(value) ||
        moment.isDate(value)
    );
};

export const isValidClockTime = (value: string): boolean => {
    const timeRegExp = /^(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)$/;

    return timeRegExp.test(value);
};

export const formatAsSystemDate = (value: string | Date | Moment, lang: string = DEFAULT_LOCALE): string =>
    isValidDate(value) ? moment(value).locale(lang.toLowerCase()).format(DEFAULT_DATE_FORMAT) : value.toString();

export const formatDate = (
    value: string | Date | Moment,
    lang: string = DEFAULT_LOCALE,
    format = 'DD MMM YYYY'
): string => (isValidDate(value) ? moment(value).locale(lang.toLowerCase()).format(format) : value.toString());

export const formatTime = (value: string | Date | Moment, addLeadingZero = true): string => {
    if (isValidDate(value)) {
        return moment(value).format(addLeadingZero ? 'HH:mm' : 'H:mm');
    }

    if (isValidClockTime(value.toString())) {
        if (typeof value === 'string') {
            if (value.includes(':')) {
                return `${addLeadingZero ? value.split(':')[0].padStart(2, '0') : value.split(':')[0]}:${value
                    .split(':')[1]
                    .padStart(2, '0')}`;
            }

            if (value.length === 3) {
                return `${
                    addLeadingZero ? value.substring(0, 1).padStart(2, '0') : value.substring(0, 1)
                }:${value.substring(1, 2).padStart(2, '0')}`;
            }

            return value;
        }
    }

    return value.toString();
};

export const isDateBetween = (date: Moment, dateFrom: Moment, dateTo: Moment): boolean =>
    date.isSameOrAfter(dateFrom) && date.isSameOrBefore(dateTo);

export const isFutureDate = (date: Moment | null, includeToday = false): boolean =>
    date !== null &&
    ((includeToday && date.isSameOrAfter(moment(), 'day')) || (!includeToday && date.isAfter(moment(), 'day')));

// Can not use Date constructor due to browser differences, hence this function
export const toDate = (
    value: string | Date | Moment,
    lang: string = DEFAULT_LOCALE,
    format = DEFAULT_DATE_FORMAT
): Date | null => (isValidDate(value, lang, format) ? moment(value, format).locale(lang.toLowerCase()).toDate() : null);

export const currentDate = (lang: string = DEFAULT_LOCALE): Date => moment().locale(lang.toLowerCase()).toDate();

export const toMoment = (
    value: string | Date | Moment,
    lang: string = DEFAULT_LOCALE,
    format = DEFAULT_DATE_FORMAT
): Moment | null => (isValidDate(value, lang, format) ? moment(value, format).locale(lang.toLowerCase()) : null);

export const compareDates = (d1: Moment | Date | string | null, d2: Moment | Date | string | null): boolean => {
    const D1 = toMoment(d1 || '');
    const D2 = toMoment(d2 || '');

    return (D1 === null && D2 === null) || (D1 !== null && D2 !== null && D1?.isSame(D2, 'day')) || false;
};
