import { IconType } from '../../../types';

export interface MenuItemChild {
    exact?: boolean;
    isDisabled?: boolean;
    path: string;
    text: React.ReactNode;
}

export interface MenuItem extends MenuItemChild {
    children?: MenuItemChild[];
    iconType: IconType;
}

export type MenuItems = MenuItem[];
