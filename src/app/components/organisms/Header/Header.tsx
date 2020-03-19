import { Elevation, IconType } from '../../../types';
import {
    FunctionalWrapper,
    NavigationWrapper,
    StyledHeader,
    Title,
} from './Header.sc';
import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import Toolbar from '../Toolbar/Toolbar';

export interface HeaderProps {
    children?: ReactNode;
    className?: string;
    elevation?: Elevation;
    isInverted?: boolean;
    onBack?: MouseEventHandler;
    onToggleMenu?: MouseEventHandler;
    title: ReactNode;
}

export const Header: FunctionComponent<HeaderProps> = ({
    children,
    className,
    elevation = Elevation.LEVEL_1,
    isInverted = false,
    onBack,
    onToggleMenu,
    title,
}) => (
    <StyledHeader className={className} elevation={elevation} isInverted={isInverted}>
        {(onBack || onToggleMenu) && (
            <NavigationWrapper>
                {onToggleMenu && (
                    <ButtonIcon iconType={IconType.MENU} isInverted={!isInverted} onClick={onToggleMenu} />
                )}
                {onBack && (
                    <ButtonIcon iconType={IconType.CHEVRONLEFT} isInverted={!isInverted} onClick={onBack} />
                )}
            </NavigationWrapper>
        )}
        <Title>
            {title}
        </Title>
        <FunctionalWrapper>
            <Toolbar isInverted={!isInverted}>
                {children}
            </Toolbar>
        </FunctionalWrapper>
    </StyledHeader>
);

export default Header;
