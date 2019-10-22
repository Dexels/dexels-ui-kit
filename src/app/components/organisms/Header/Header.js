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
                    isInverted={isInverted}
                    key={1}
                    onClick={() => {}}
                    variant={ButtonIcon.variants.HEADER}
                />
            )}
            {hasNavigateBackOption && (
                <ButtonIcon
                    iconType={Icon.types.CHEVRON_LEFT}
                    isInverted={isInverted}
                    key={2}
                    onClick={() => {}}
                    variant={ButtonIcon.variants.HEADER}
                />
            )}
            {title && (
                <Title>
                    {title}
                </Title>
            )}
        </NavigationWrapper>
        <FunctionalWrapper>
            <Toolbar>
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
    title: PropTypes.string,
};

Header.defaultProps = {
    elevation: Header.elevations.LEVEL_1,
    hasMenuOption: true,
    hasNavigateBackOption: true,
    isInverted: false,
    title: 'Header',
};

export default Header;
