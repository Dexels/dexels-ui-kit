import { ICON_TYPES } from '../../../atoms/Icon/Icon.consts';
import { MenuItems } from '../types';

export const menuItems: MenuItems = [
    {
        children: [],
        exact: true,
        iconType: ICON_TYPES.WORLD,
        path: '/',
        text: 'Home',
    },
    {
        children: [],
        iconType: ICON_TYPES.SHIRT,
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
                path: '/wedstrijden/velden',
                text: 'Velden',
            },
        ],
        iconType: ICON_TYPES.MATCHOWN,
        path: '/wedstrijden',
        text: 'Wedstrijden',
    },
    {
        children: [
            {
                path: '/competitie/teams',
                text: 'Teams',
            },
            {
                path: '/competitie/officials',
                text: 'Officials',
            },
        ],
        iconType: ICON_TYPES.LIGHTBULB,
        path: '/competitie',
        text: 'Competitie',
    },
];

export default menuItems;
