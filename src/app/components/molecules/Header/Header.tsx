import ButtonIcon, { ButtonIconProps } from '../ButtonIcon/ButtonIcon';
import { Buttons, StyledHeader, Title, ToolbarWrapper } from './Header.sc';
import React, { FunctionComponent, ReactNode } from 'react';
import { Elevation } from '../../../types';
import Toolbar from '../../organisms/Toolbar/Toolbar';

export interface HeaderProps {
    buttons?: Omit<ButtonIconProps, 'isInverted'>[];
    children?: ReactNode;
    className?: string;
    elevation?: Elevation;
    isInverted?: boolean;
    title?: ReactNode;
}

export const Header: FunctionComponent<HeaderProps> = ({
    buttons = [],
    children,
    className,
    elevation = Elevation.LEVEL_1,
    isInverted = false,
    title,
}) => (
    <StyledHeader className={className} elevation={elevation} isInverted={isInverted}>
        {buttons.length > 0 && (
            <Buttons>
                {buttons.map((button) => (
                    <ButtonIcon isInverted={!isInverted} key={button.iconType} {...button} />
                ))}
            </Buttons>
        )}
        <Title>{title}</Title>
        <ToolbarWrapper>
            <Toolbar isInverted={!isInverted}>{children}</Toolbar>
        </ToolbarWrapper>
    </StyledHeader>
);

export default Header;
