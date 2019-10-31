import moment from 'moment';

export function isValidDate(date) {
    return moment(date).isValid;
}

export function formatDate(date, format = 'DD-MMM-YYYY', lang = 'nl') {
    if (isValidDate(date)) {
        return moment(date).locale(lang).format(format);
    }

    return date;
}
