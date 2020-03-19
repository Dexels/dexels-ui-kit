import moment, { Moment } from 'moment';

export const isValidDate = (date: string | Moment): boolean => (
    moment(date).isValid()
);

export const formatDate = (date: string | Moment, format = 'DD-MMM-YYYY', lang = 'nl'): string | Moment => {
    if (isValidDate(date)) {
        return moment(date).locale(lang).format(format);
    }

    return date;
};
