export enum WRAPPER_WIDTHS {
    'LARGE' = 'LARGE',
    'MEDIUM' = 'MEDIUM',
    'SMALL' = 'SMALL',
}

export interface WrapperProps {
    children?: React.ReactNode;
    isTransparent: boolean;
    width: WRAPPER_WIDTHS;
}

export interface StyledWrapperProps extends WrapperProps {}
