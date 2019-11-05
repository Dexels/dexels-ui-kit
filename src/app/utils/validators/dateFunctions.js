import moment from 'moment';

export const isValidDate = (date) => {
    return moment(date).isValid;
};

export const formatDate = (date, format = 'DD-MMM-YYYY', lang = 'nl') => {
    if (isValidDate(date)) {
        return moment(date).locale(lang).format(format);
    }

    return date;
};
