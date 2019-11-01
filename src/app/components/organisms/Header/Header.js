import {
    FunctionalWrapper,
    NavigationWrapper,
    StyledHeader,
    Title,
} from './Header.sc';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import { ELEVATIONS } from '../../../utils/constants';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '../Toolbar/Toolbar';

const Header = ({
    children,
    elevation,
    hasMenuOption,
    hasNavigateBackOption,
    isInverted,
    onClick,
    title,
}) => (
    <StyledHeader
        elevation={elevation}
        isInverted={isInverted}
    >
        <NavigationWrapper>
            {hasMenuOption && (
                <ButtonIcon
                    iconType={Icon.types.MENU}
                    isInverted={!isInverted}
                    onClick={onClick}
                />
            )}
            {hasNavigateBackOption && (
                <ButtonIcon
                    iconType={Icon.types.CHEVRONLEFT}
                    isInverted={!isInverted}
                    onClick={onClick}
                />
            )}
            {title && (
                <Title>
                    {title}
                </Title>
            )}
        </NavigationWrapper>
        <FunctionalWrapper>
            <Toolbar isInverted={!isInverted}>
                {children}
            </Toolbar>
        </FunctionalWrapper>
    </StyledHeader>
);

Header.elevations = ELEVATIONS;

Header.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(Header.elevations)),
    hasMenuOption: PropTypes.bool,
    hasNavigateBackOption: PropTypes.bool,
    isInverted: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string,
};

Header.defaultProps = {
    elevation: Header.elevations.LEVEL_1,
    hasMenuOption: true,
    hasNavigateBackOption: true,
    isInverted: false,
    title: '',
};

export default Header;
