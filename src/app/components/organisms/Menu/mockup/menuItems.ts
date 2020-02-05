import { IconType } from '../../../../types';
import { MenuItems } from '../types';

export const menuItems: MenuItems = [
    {
        children: [],
        exact: true,
        iconType: IconType.WORLD,
        path: '/',
        text: 'Home',
    },
    {
        children: [],
        iconType: IconType.SHIRT,
        path: '/toernooi',
        text: 'Toernooi met een extreem lange titel',
    },
    {
        children: [],
        iconType: IconType.SHIELD,
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
        iconType: IconType.MATCHOWN,
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
        iconType: IconType.LIGHTBULB,
        path: '/competitie',
        text: 'Competitie',
    },
];

export default menuItems;
