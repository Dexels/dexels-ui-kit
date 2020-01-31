export enum WrapperWidth {
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
}

export interface WrapperProps {
    children?: React.ReactNode;
    isTransparent: boolean;
    width: WrapperWidth;
}

export interface StyledWrapperProps extends WrapperProps {}
