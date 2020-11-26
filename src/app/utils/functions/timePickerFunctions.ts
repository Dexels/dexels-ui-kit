import { Moment } from 'moment';

export const parseClocktimeToTimePickerValue = (value: null | string | undefined): [string, string] =>
    value ? [value.split(':')[0], value.split(':')[1]] : ['', ''];

export const parseMomentToTimePickerValue = (momentInstance: Moment): [string, string] => [
    momentInstance.format('HH'),
    momentInstance.format('mm'),
];

export const parseTimePickerValueToClocktime = (
    value: null | undefined | [string, string],
    zeroIsDelete?: boolean
): string | null => {
    const hours = value && value[0] ? value[0] : undefined;
    const minutes = value && value[1] ? value[1] : undefined;

    if (zeroIsDelete && hours === '00' && minutes === '00') {
        return null;
    }

    return hours || minutes ? `${hours || '00'}:${minutes || '00'}:00` : null;
};
