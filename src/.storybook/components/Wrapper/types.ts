import { ReactNode } from 'react';

export enum WrapperWidth {
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
}

export interface WrapperProps {
    children?: ReactNode;
    isTransparent: boolean;
    width: WrapperWidth;
}

export interface StyledWrapperProps extends WrapperProps {}
