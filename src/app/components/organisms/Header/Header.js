import {
    ButtonContainer,
    FunctionalWrapper,
    NavigationWrapper,
    StyledHeader,
    Title,
} from './Header.sc';
import { ELEVATIONS } from '../../../utils/constants';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({
    children,
    elevation,
    navigationIcons,
    functionalButtons,
    title,
}) => (
    <StyledHeader elevation={elevation}>
        <NavigationWrapper>
            {navigationIcons.length > 0 && navigationIcons.map((navigationIcon) => (
                navigationIcon
            ))}
            <Title>
                {title}
            </Title>
        </NavigationWrapper>
        <FunctionalWrapper>
            {children}
            {functionalButtons.length > 0 && functionalButtons.map((functionalButton) => (
                <ButtonContainer key={functionalButton.key}>
                    {functionalButton}
                </ButtonContainer>
            ))}
        </FunctionalWrapper>
    </StyledHeader>
);

Header.elevations = ELEVATIONS;

Header.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(Header.elevations)),
    functionalButtons: PropTypes.arrayOf(PropTypes.object),
    navigationIcons: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

Header.defaultProps = {
    elevation: Header.elevations.LEVEL_1,
    functionalButtons: [],
    navigationIcons: [],
};

export default Header;
