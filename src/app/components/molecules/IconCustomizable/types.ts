import { IconType } from '../../../types';

// Size is in px value and is being utilized with font-size
export enum IconCustomizableSize {
    SIZE120 = '120',
    SIZE128 = '128',
    SIZE20 = '20',
    SIZE22 = '22',
    SIZE24 = '24',
    SIZE26 = '26',
    SIZE28 = '28',
    SIZE30 = '30',
    SIZE32 = '32',
    SIZE34 = '34',
    SIZE36 = '36',
    SIZE38 = '38',
    SIZE40 = '40',
    SIZE42 = '42',
    SIZE44 = '44',
    SIZE46 = '46',
    SIZE48 = '48',
    SIZE50 = '50',
    SIZE64 = '64',
    SIZE84 = '84',
    SIZE96 = '96',
}

export interface IconCustomizableProps {
    className?: string;
    iconColor?: string;
    iconSize: IconCustomizableSize;
    iconType: IconType;
}
