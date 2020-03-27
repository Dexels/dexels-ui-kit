import { ButtonWrapper, StyledToolbar } from './Toolbar.sc';
import React, { Children, cloneElement, FunctionComponent, isValidElement, ReactNode } from 'react';
import Button from '../../molecules/Button/Button';

export interface ToolbarProps {
    children?: ReactNode;
    className?: string;
    isInverted?: boolean;
}

export const Toolbar: FunctionComponent<ToolbarProps> = ({ children, className, isInverted = false }) => (
    <StyledToolbar className={className}>
        {Children.map(children, (child) => {
            if (isValidElement(child)) {
                if (child.type === Button) {
                    return <ButtonWrapper>{cloneElement(child, { isInverted })}</ButtonWrapper>;
                }

                return cloneElement(child, { isInverted });
            }

            return child;
        })}
    </StyledToolbar>
);

export default Toolbar;
