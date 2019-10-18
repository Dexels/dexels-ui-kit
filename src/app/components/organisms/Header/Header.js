import {
    FunctionalContainer,
    FunctionalWrapper,
    NavigationWrapper,
    StyledHeader,
    Title,
} from './Header.sc';
import { ELEVATIONS } from '../../../utils/constants';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({
    elevation,
    navigationItems,
    functionalItems,
    title,
}) => (
    <StyledHeader elevation={elevation}>
        <NavigationWrapper>
            {navigationItems.length > 0 && navigationItems.map((navigationItem) => (
                navigationItem
            ))}
            <Title>
                {title}
            </Title>
        </NavigationWrapper>
        <FunctionalWrapper>
            {functionalItems.length > 0 && functionalItems.map((functionalItem) => (
                <FunctionalContainer key={functionalItem.key}>
                    {functionalItem}
                </FunctionalContainer>
            ))}
        </FunctionalWrapper>
    </StyledHeader>
);

Header.elevations = ELEVATIONS;

Header.propTypes = {
    elevation: PropTypes.oneOf(Object.values(Header.elevations)),
    functionalItems: PropTypes.arrayOf(PropTypes.object),
    navigationItems: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
};

Header.defaultProps = {
    elevation: Header.elevations.LEVEL_1,
    functionalItems: [],
    navigationItems: [],
    title: 'Header',
};

export default Header;
