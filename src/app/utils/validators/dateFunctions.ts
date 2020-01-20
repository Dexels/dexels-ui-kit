import moment, { Moment } from 'moment';

export const isValidDate = (date: string | Moment) => (
    moment(date).isValid()
);

export const formatDate = (date: string | Moment, format = 'DD-MMM-YYYY', lang = 'nl') => {
    if (isValidDate(date)) {
        return moment(date).locale(lang).format(format);
    }

    return date;
};
