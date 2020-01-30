import { IconTypes } from '../../../types';

export interface MenuItemChild {
    exact?: boolean;
    isDisabled?: boolean;
    path: string;
    text: React.ReactNode;
}

export interface MenuItem extends MenuItemChild {
    children?: MenuItemChild[];
    iconType: IconTypes;
}

export type MenuItems = MenuItem[];
