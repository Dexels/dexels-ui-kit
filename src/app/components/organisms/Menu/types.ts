import { IconType } from '../../../types';
import { ReactNode } from 'react';

export interface MenuItemChild {
    exact?: boolean;
    isDisabled?: boolean;
    isVisible?: boolean;
    path: string;
    text: ReactNode;
}

export interface MenuItem extends MenuItemChild {
    children?: MenuItemChild[];
    iconType: IconType;
}

export type MenuItems = MenuItem[];
