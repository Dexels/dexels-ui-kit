import { Elevations, ElevationsMap } from '../../../types';
import {
    FunctionalWrapper,
    NavigationWrapper,
    StyledHeader,
    Title,
} from './Header.sc';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import { ELEVATIONS } from '../../../utils/constants';
import Icon from '../../atoms/Icon/Icon';
import React from 'react';
import Toolbar from '../Toolbar/Toolbar';

export interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
    elevation?: Elevations;
    isInverted?: boolean;
    onBack?: React.MouseEventHandler;
    onToggleMenu?: React.MouseEventHandler;
    title: React.ReactNode;
}

interface HeaderComponent extends React.FunctionComponent<HeaderProps> {
    elevations: ElevationsMap;
}

export const Header: HeaderComponent = ({
    children,
    className,
    elevation,
    isInverted,
    onBack,
    onToggleMenu,
    title,
}) => (
    <StyledHeader className={className} elevation={elevation} isInverted={isInverted}>
        {(onBack || onToggleMenu) && (
            <NavigationWrapper>
                {onToggleMenu && (
                    <ButtonIcon iconType={Icon.types.MENU} isInverted={!isInverted} onClick={onToggleMenu} />
                )}
                {onBack && (
                    <ButtonIcon iconType={Icon.types.CHEVRONLEFT} isInverted={!isInverted} onClick={onBack} />
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

Header.elevations = ELEVATIONS;

Header.defaultProps = {
    children: null,
    className: '',
    elevation: Header.elevations.LEVEL_1,
    isInverted: false,
    onBack: null,
    onToggleMenu: null,
};

export default Header;
