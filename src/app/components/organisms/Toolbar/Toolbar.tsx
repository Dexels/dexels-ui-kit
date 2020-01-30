import { ButtonWrapper, StyledToolbar } from './Toolbar.sc';
import Button from '../../molecules/Button/Button';
import React from 'react';

export interface ToolbarProps {
    children?: React.ReactNode;
    className?: string;
    isInverted?: boolean;
}

export const Toolbar: React.FunctionComponent<ToolbarProps> = ({ children, className, isInverted }) => (
    <StyledToolbar className={className}>
        {React.Children.map(children, (child: React.ReactElement) => {
            if (child.type === Button) {
                return (
                    <ButtonWrapper key={child.key}>
                        {React.cloneElement(child, { isInverted })}
                    </ButtonWrapper>
                );
            }

            return React.cloneElement(child, { isInverted });
        })}
    </StyledToolbar>
);

Toolbar.defaultProps = {
    children: null,
    className: '',
    isInverted: false,
};

export default Toolbar;
