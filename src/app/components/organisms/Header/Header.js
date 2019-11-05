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
    isInverted,
    onBack,
    onToggleMenu,
    title,
}) => (
    <StyledHeader elevation={elevation} isInverted={isInverted}>
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
        {title && (
            <Title>
                {title}
            </Title>
        )}
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
    isInverted: PropTypes.bool,
    onBack: PropTypes.func,
    onToggleMenu: PropTypes.func,
    title: PropTypes.string,
};

Header.defaultProps = {
    elevation: Header.elevations.LEVEL_1,
    isInverted: false,
    onBack: null,
    onToggleMenu: null,
    title: '',
};

export default Header;
