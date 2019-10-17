import {
    ButtonContainer,
    LeftContainer,
    RightContainer,
    StyledHeader,
    Title,
} from './Header.sc';
import { ELEVATIONS } from '../../../utils/constants';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({
    elevation,
    navigationIcons,
    functionalButtons,
    functionalIcons,
    title,
}) => (
    <StyledHeader elevation={elevation}>
        <LeftContainer>
            {navigationIcons.length > 0 && navigationIcons.map((leftSideIcon) => (
                leftSideIcon
            ))}
            <Title>
                {title}
            </Title>
        </LeftContainer>
        <RightContainer>
            {functionalIcons.length > 0 && functionalIcons.map((rightSideIcon) => (
                rightSideIcon
            ))}
            {functionalButtons.length > 0 && functionalButtons.map((rightSideButton) => (
                <ButtonContainer key={rightSideButton.key}>
                    {rightSideButton}
                </ButtonContainer>
            ))}
        </RightContainer>
    </StyledHeader>
);

Header.elevations = ELEVATIONS;

Header.propTypes = {
    elevation: PropTypes.oneOf(Object.values(Header.elevations)),
    functionalButtons: PropTypes.arrayOf(PropTypes.object),
    functionalIcons: PropTypes.arrayOf(PropTypes.object),
    navigationIcons: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

Header.defaultProps = {
    elevation: Header.elevations.LEVEL_1,
    functionalButtons: [],
    functionalIcons: [],
    navigationIcons: [],
};

export default Header;
