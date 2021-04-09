/* eslint-disable radix */
import moment, { Moment } from 'moment';

const defaultLocale = 'NL';
const systemDateFormat = 'YYYY-MM-DD';

export const isValidStringDate = (inputText: string): boolean => {
    // eslint-disable-next-line max-len
    const dateFormatRegExp = /^([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})/;
    const dateWithTimezoneRegExp = /\d{4}-[0-1]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\+\d{4}/;

    return dateWithTimezoneRegExp.test(inputText) || dateFormatRegExp.test(inputText);
};

export const isValidDate = (value: string | Date | Moment): boolean =>
    (typeof value === 'string' && isValidStringDate(value)) ||
    moment.isMoment(value) ||
    moment.isDate(value) ||
    ((moment.parseZone(value).inspect().includes('moment.parseZone') ||
        moment.parseZone(value).inspect().includes('moment.utc')) &&
        !moment.parseZone(value).inspect().includes('moment.invalid'));

export const isValidClockTime = (value: string): boolean => {
    const timeRegExp = /^(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)$/;

    return timeRegExp.test(value);
};

export const formatAsSystemDate = (value: string | Date | Moment, lang: string = defaultLocale): string =>
    isValidDate(value) ? moment(value).locale(lang).format(systemDateFormat) : value.toString();

export const formatDate = (
    value: string | Date | Moment,
    lang: string = defaultLocale,
    format = 'DD MMM YYYY'
): string => (isValidDate(value) ? moment(value).locale(lang).format(format) : value.toString());

export const formatTime = (value: string | Date | Moment): string => {
    if (isValidDate(value)) {
        return moment(value).format('HH:mm');
    }

    if (isValidClockTime(value.toString())) {
        if (typeof value === 'string') {
            if (value.includes(':')) {
                return `${value.split(':')[0]}:${value.split(':')[1]}`;
            }

            if (value.length === 3) {
                return `0${value.substring(0, 1)}:${value.substring(1, 2)}`;
            }

            return value;
        }
    }

    return value.toString();
};

export const isDateBetween = (date: Moment, dateFrom: Moment, dateTo: Moment): boolean =>
    date.isSameOrAfter(dateFrom) && date.isSameOrBefore(dateTo);

export const isFutureDate = (date: Moment | null, includeToday: boolean = false): boolean =>
    date !== null && ((includeToday && date.isSameOrAfter(moment(), 'day')) || (!includeToday && date.isAfter(moment(), 'day')));

// Can not use Date constructor due to browser differences, hence this function
export const toDate = (value: string |
    Date | Moment, lang: string = defaultLocale): Date | null =>
    isValidDate(value) ? moment(value).locale(lang).toDate() : null;

export const currentDate = (lang: string = defaultLocale): Date => moment().locale(lang).toDate();

export const toMoment = (value: string | Date | Moment, lang: string = defaultLocale): Moment | null =>
    isValidDate(value) ? moment(value).locale(lang) : null;

export const compareDates = (d1: Moment | Date | string | null, d2: Moment | Date | string | null): boolean => {
    const D1 = toMoment(d1 || '');
    const D2 = toMoment(d2 || '');

    return (D1 === null && D2 === null) || (D1 !== null && D2 !== null && D1?.isSame(D2, 'day')) || false;
};
