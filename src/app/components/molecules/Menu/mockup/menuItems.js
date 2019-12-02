import { ICON_TYPES } from '../../../atoms/Icon/Icon.consts';

export const menuItems = [
    {
        children: [],
        iconType: ICON_TYPES.SHIRT,
        isDisabled: false,
        path: '/toernooi',
        text: 'Toernooi met een extreem lange titel',
    },
    {
        children: [],
        iconType: ICON_TYPES.SHIELD,
        isDisabled: true,
        path: '/club',
        text: 'Club',
    },
    {
        children: [
            {
                isDisabled: true,
                path: '/wedstrijden/kleedkamers',
                text: 'Kleedkamers die zo lang zijn dat je er niet eens op kan drukken',
            },
            {
                isDisabled: false,
                path: '/wedstrijden/velden',
                text: 'Velden',
            },
        ],
        iconType: ICON_TYPES.MATCHOWN,
        isDisabled: false,
        path: undefined,
        text: 'Wedstrijden',
    },
    {
        children: [
            {
                isDisabled: false,
                path: '/competitie/teams',
                text: 'Teams',
            },
            {
                isDisabled: false,
                path: '/competitie/officials',
                text: 'Officials',
            },
        ],
        iconType: ICON_TYPES.LIGHTBULB,
        isDisabled: false,
        path: undefined,
        text: 'Competitie',
    },
];

export default menuItems;
