import { ButtonWrapper, StyledToolbar } from './Toolbar.sc';
import Button from '../../molecules/Button/Button';
import React from 'react';

export interface ToolbarProps {
    children: React.ReactNode;
    className?: string;
    isInverted?: boolean;
}

export const Toolbar: React.FunctionComponent<ToolbarProps> = ({ children, className, isInverted = false }) => (
    <StyledToolbar className={className}>
        {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
                if (child.type === Button) {
                    return (
                        <ButtonWrapper key={child.key || index}>
                            {React.cloneElement(child, { isInverted })}
                        </ButtonWrapper>
                    );
                }

                return React.cloneElement(child, { isInverted });
            }

            return child;
        })}
    </StyledToolbar>
);

export default Toolbar;
